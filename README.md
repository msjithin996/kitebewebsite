# Kitebe 
A modern website built with Next.js 16, React 19, and TypeScript.

## 📦 Tech Stack

- **Framework**: Next.js 16.0.7
- **React**: 19.2.1
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **3D Graphics**: Three.js
- **Icons**: Lucide React

## 📊 Monitoring & Analytics

This project includes Vercel's monitoring tools for performance tracking and user analytics.

### Installed Packages

- `@vercel/analytics` - User analytics and insights
- `@vercel/speed-insights` - Real-time performance monitoring

### Integration Location

Both components are integrated in `app/layout.tsx`:

```tsx
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Added at the end of the <body> tag
<Analytics />
<SpeedInsights />
```

### How to Remove (if needed)

If you need to remove these features in the future:

1. **Remove the packages:**
   ```bash
   npm uninstall @vercel/analytics @vercel/speed-insights
   ```

2. **Remove from `app/layout.tsx`:**
   - Delete the import statements:
     ```tsx
     import { Analytics } from "@vercel/analytics/next";
     import { SpeedInsights } from "@vercel/speed-insights/next";
     ```
   - Remove the components from the JSX:
     ```tsx
     <Analytics />
     <SpeedInsights />
     ```


## 📝 License

This project is private and proprietary.
