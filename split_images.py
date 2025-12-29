from PIL import Image, ImageOps
import sys
import os

source_path = "/Users/ms/.gemini/antigravity/brain/a2cada9c-3c77-4fae-bbd8-b829d19a87eb/uploaded_image_1766957419564.png"
output_dir = "public/images/about"
os.makedirs(output_dir, exist_ok=True)

try:
    img = Image.open(source_path).convert("RGB")
except Exception as e:
    print(f"Error opening image: {e}")
    sys.exit(1)

# Invert image to make background black and content colored/white
# Then turn to grayscale
gray = ImageOps.invert(img).convert("L")

# Threshold: turn anything "near white" (in original) to black (0)
# and anything "darker" (content) to white (255) in the mask.
# Original image is white background (~255, 255, 255).
# Inverted is black background (0, 0, 0).
# Content is darker in original, so lighter in inverted.
# We want to find regions where pixel value > threshold.
threshold = 10
mask = gray.point(lambda p: 255 if p > threshold else 0)

# Now find bounding boxes of connected components
# Since we don't have CV2, we can try a recursive search or a simple scan?
# A simple scan for "islands" might be slow in pure python.
# However, we can use the "recursive crop" trick:
# 1. Get bbox of the whole mask.
# 2. Crop that.
# 3. If there are white dividers (black in mask), we can try to split?

# Let's try a projection approach.
width, height = mask.size
pixels = mask.load()

# Horizontal projection (sum of rows)
row_has_content = [False] * height
for y in range(height):
    for x in range(width):
        if pixels[x, y] > 0:
            row_has_content[y] = True
            break # Optimization

# Vertical projection (sum of cols)
col_has_content = [False] * width
for x in range(width):
    for y in range(height):
        if pixels[x, y] > 0:
            col_has_content[x] = True
            break

# Helper to find ranges of True
def get_ranges(bool_array):
    ranges = []
    start = None
    for i, val in enumerate(bool_array):
        if val and start is None:
            start = i
        elif not val and start is not None:
            ranges.append((start, i))
            start = None
    if start is not None:
        ranges.append((start, len(bool_array)))
    return ranges

col_ranges = get_ranges(col_has_content)
row_ranges = get_ranges(row_has_content)

print(f"Found {len(col_ranges)} column ranges and {len(row_ranges)} row ranges")

# If we have 3 distinct column ranges, that's perfect.
# If not, we might need more complex logic.

regions = []

# Naive approach: Find independent blobs? 
# Better: divide into grid cells based on projections?
# If we have [Col1] [Col2] [Col3]
# and [Row1] [Row2]
# We can check intersections.
# But the woman image might span multiple rows if rows are defined by the other images?
# Actually, if the woman image overlaps the y-range of the laptop image, they will merge in row_ranges.

# Let's assume the images are distinct blobs separated by whitespace.
# We can implement a basic non-recursive flood fill or region growing to find blobs.
from collections import deque

visited = set()
blobs = []

# Downsample for speed? 
# Finding blobs on full 4k image in python might be slow.
# Let's resize mask for detection.
scale = 0.1
small_mask = mask.resize((int(width * scale), int(height * scale)), resample=Image.NEAREST)
sw, sh = small_mask.size
spixels = small_mask.load()

# Find generic blobs
for y in range(sh):
    for x in range(sw):
        if spixels[x, y] > 0 and (x, y) not in visited:
            # Start a new blob
            blob_min_x, blob_max_x = x, x
            blob_min_y, blob_max_y = y, y
            q = deque([(x, y)])
            visited.add((x, y))
            
            # Count pixels to ignore noise
            pixel_count = 0
            
            while q:
                cx, cy = q.popleft()
                pixel_count += 1
                
                blob_min_x = min(blob_min_x, cx)
                blob_max_x = max(blob_max_x, cx)
                blob_min_y = min(blob_min_y, cy)
                blob_max_y = max(blob_max_y, cy)
                
                # Check neighbors
                for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
                    nx, ny = cx + dx, cy + dy
                    if 0 <= nx < sw and 0 <= ny < sh:
                        if spixels[nx, ny] > 0 and (nx, ny) not in visited:
                            visited.add((nx, ny))
                            q.append((nx, ny))
            
            # Map back to original coordinates
            if pixel_count > 50: # Filter noise
                orig_box = (
                    int(blob_min_x / scale),
                    int(blob_min_y / scale),
                    int(blob_max_x / scale), # w is diff
                    int(blob_max_y / scale)  # h is diff
                )
                blobs.append(orig_box)

print(f"Found {len(blobs)} blobs")

# Save blobs
# Sort by x coordinate to identify them
blobs.sort(key=lambda b: b[0])

# Expected: Left (Laptop), Center (Woman), Right (Street)
# But we might also find the text block as a blob.

for i, (bx1, by1, bx2, by2) in enumerate(blobs):
    # Add some padding or correctness?
    # Because of downsampling, we might clip edges. 
    # Let's expand a bit and then crop from original
    padding = 0
    x1 = max(0, bx1 - padding)
    y1 = max(0, by1 - padding)
    x2 = min(width, bx2 + padding + int(1/scale)) # Add 1 pixel of low res size
    y2 = min(height, by2 + padding + int(1/scale))
    
    crop = img.crop((x1, y1, x2, y2))
    
    # Check if it looks like the text block?
    # Text block is likely wider than tall, or situated in bottom-left.
    # Laptop is top-left.
    # Woman is Center.
    # Street is Right.
    
    # We'll save all and I will inspect via file properties later or just assign them based on index.
    filename = f"image_{i}.png"
    crop.save(os.path.join(output_dir, filename))
    print(f"Saved {filename} ({crop.width}x{crop.height})")

