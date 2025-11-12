# Voltage Labs Logo Files

This directory contains all logo variations for the Voltage Labs website. Please add the following 5 logo files to this directory:

## Required Logo Files

### 1. **full_logo_white_background_transparent.png**
- **Usage:** Primary logo for desktop light mode
- **Description:** Full logo with company name and icon
- **Background:** Transparent, optimized for light backgrounds
- **Dimensions:** ~200-250px width recommended
- **Currently Used In:** Header component (desktop, light mode)

### 2. **full_logo_grey_background.png**
- **Usage:** Alternative full logo for specific backgrounds
- **Description:** Full logo on grey background
- **Background:** Grey (#F3F4F6 or similar)
- **Dimensions:** ~200-250px width recommended
- **Currently Used In:** Available for future use (email signatures, presentations)

### 3. **voltage_labs_logo_only_transparent.png**
- **Usage:** Icon-only version for mobile devices
- **Description:** Company icon/symbol without text
- **Background:** Transparent, works on both light and dark backgrounds
- **Dimensions:** ~48-60px square recommended
- **Currently Used In:** Header component (mobile, all modes)

### 4. **voltage_labs_dark_background_logo_only.png**
- **Usage:** Icon-only version optimized for dark mode
- **Description:** Company icon/symbol without text, optimized for dark backgrounds
- **Background:** Transparent, optimized for dark themes
- **Dimensions:** ~48-60px square recommended
- **Currently Used In:** Header component (desktop, dark mode)

### 5. **full_logo_white_background.png**
- **Usage:** Standard full logo with solid white background
- **Description:** Full logo with company name on white background
- **Background:** Solid white (#FFFFFF)
- **Dimensions:** ~200-250px width recommended
- **Currently Used In:** Available for future use (documents, external platforms)

## Favicon

The favicon is generated from logo file #3 (`voltage_labs_logo_only_transparent.png`). If you need to update the favicon:

1. Export icon version as SVG or high-res PNG
2. Use a favicon generator (e.g., realfavicongenerator.net)
3. Replace `/public/favicon.svg` with new favicon

## Logo Switching Logic

The website automatically switches logos based on:

**Desktop Light Mode:**
- Uses: `full_logo_white_background_transparent.png`
- Shows: Full logo with text

**Desktop Dark Mode:**
- Uses: `voltage_labs_dark_background_logo_only.png`
- Shows: Icon only (cleaner look on dark backgrounds)

**Mobile (< 768px):**
- Uses: `voltage_labs_logo_only_transparent.png`
- Shows: Icon only (saves horizontal space)

This logic is implemented in `/src/components/logo/logo.tsx` using CSS media queries and dark mode classes.

## Technical Specifications

### Recommended Specs:
- **Format:** PNG with transparency (for most), JPEG/PNG for solid backgrounds
- **Color Mode:** RGB
- **Resolution:** 2x or 3x for retina displays
- **Compression:** Optimized for web (use tools like TinyPNG)
- **File Size:** < 100KB per logo file

### Desktop Full Logos:
- Width: 200-250px (or proportional to your design)
- Height: Auto (maintain aspect ratio)
- DPI: 144-216 for retina displays

### Icon Versions:
- Size: 48-60px square (or proportional)
- Padding: Include sufficient padding/safe area
- DPI: 144-216 for retina displays

### Color Considerations:
- Ensure sufficient contrast on both light and dark backgrounds
- Icon versions should be clearly visible at small sizes
- Test on actual dark background (#0f172a) and light background (#ffffff)

## File Naming Convention

**DO NOT rename these files.** The component expects exact file names as listed above. If you need to use different file names:

1. Update the component: `/src/components/logo/logo.tsx`
2. Update CSS Module: `/src/components/logo/logo.module.css`
3. Test on both desktop and mobile
4. Test in both light and dark modes

## Adding New Logo Variations

If you need to add additional logo variations:

1. Add the file to this directory
2. Update the Logo component if it needs programmatic access
3. Document the new file in this README
4. Ensure it follows the same quality and optimization standards

## Quality Checklist

Before adding logos, ensure:
- [ ] All 5 required files are present
- [ ] Files are properly named (exact match)
- [ ] Images are optimized for web
- [ ] Transparent backgrounds are truly transparent
- [ ] Icons are clearly visible at small sizes
- [ ] Colors have sufficient contrast
- [ ] Files are under 100KB each
- [ ] Retina/high-DPI displays are supported

## Testing

After adding logo files, test:
1. Desktop light mode - should show full logo
2. Desktop dark mode - should show icon only
3. Mobile light mode - should show icon only
4. Mobile dark mode - should show icon only
5. Logo should be clickable and link to homepage
6. Logo should have proper alt text for accessibility

## Support

For questions about logo implementation, see:
- Component: `/src/components/logo/logo.tsx`
- Styles: `/src/components/logo/logo.module.css`
- Project Guidelines: `/.claude/CLAUDE.md`
