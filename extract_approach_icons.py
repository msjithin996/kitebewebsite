from PIL import Image, ImageOps
import os

source_path = "/Users/ms/.gemini/antigravity/brain/a2cada9c-3c77-4fae-bbd8-b829d19a87eb/uploaded_image_1767024330349.png"
output_dir = "public/images/about/icons"
os.makedirs(output_dir, exist_ok=True)

try:
    img = Image.open(source_path).convert("RGB")
except Exception as e:
    print(f"Error opening image: {e}")
    exit(1)

# The icons are on the left side, vertically distributed.
# The image background is white.
# We can just crop strict rectangles since the layout is consistent.
# Visual estimation from the image:
# Header is approx top 20%.
# 5 items.
# Icons are roughly in the query x=0 to x=20% range.

width, height = img.size

# Let's try to detect rows by horizontal projection again, it worked well last time.
# Invert: Text/Icons becomes white, Background black.
gray = ImageOps.invert(img).convert("L")
threshold = 20
mask = gray.point(lambda p: 255 if p > threshold else 0)

pixels = mask.load()

# Horizontal projection to find rows (separators are black lines in original -> white in inverted? No, separators are thin lines).
# The original has black lines. Inverted they are white.
# The icons are black. Inverted they are white.
# The text is black. Inverted it is white.
# So basically everything "content" is white.

# Let's find vertical gaps where there is NO content to find rows?
# Or we can just look at the image structure.
# The lines are very distinct.
# Let's try to find potential y-cuts.

# Crop the left column where icons are (approx first 15% of width)
icon_column_width = int(width * 0.15)
icon_col = mask.crop((0, 0, icon_column_width, height))
ic_pixels = icon_col.load()
iw, ih = icon_col.size

# Scan for connected components in this strip
from collections import deque
visited = set()
components = []

for y in range(ih):
    for x in range(iw):
        if ic_pixels[x, y] > 0 and (x, y) not in visited:
            # Found a component
            q = deque([(x, y)])
            visited.add((x, y))
            min_x, max_x = x, x
            min_y, max_y = y, y
            count = 0
            
            while q:
                cx, cy = q.popleft()
                count += 1
                min_x = min(min_x, cx)
                max_x = max(max_x, cx)
                min_y = min(min_y, cy)
                max_y = max(max_y, cy)
                
                # Check neighbors
                for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
                    nx, ny = cx + dx, cy + dy
                    if 0 <= nx < iw and 0 <= ny < ih:
                        if ic_pixels[nx, ny] > 0 and (nx, ny) not in visited:
                            visited.add((nx, ny))
                            q.append((nx, ny))
                            
            if count > 100: # Filter noise
                # Check height/width ratio. Icons should be somewhat square-ish or at least substantial.
                w = max_x - min_x
                h = max_y - min_y
                if h > 20 and w > 20:
                     components.append((min_x, min_y, max_x, max_y))

# Sort by Y
components.sort(key=lambda c: c[1])

# We expect 5 icons.
# The header "Approach and philosophy" might be detected as text if it enters the crop area, but it's large text.
# The icons look like 3D shapes.
# Let's iterate and save them.

print(f"Found {len(components)} components in left column.")

# We want the last 5 significant components probably.
# Or filter by Y position. The header is at the top.
# Let's save all and we can rename them.
for i, (x1, y1, x2, y2) in enumerate(components):
    # Add padding
    pad = 10
    crop_box = (
        max(0, x1 - pad),
        max(0, y1 - pad),
        min(width, x2 + pad), # Use full width? No, just icon width.
        min(height, y2 + pad)
    )
    # Actually crop from original image
    icon_crop = img.crop(crop_box)
    
    filename = f"icon_{i}.png"
    icon_crop.save(os.path.join(output_dir, filename))
    print(f"Saved {filename} at y={y1}")

