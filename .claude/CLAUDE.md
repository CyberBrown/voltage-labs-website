# Voltage Labs Website - Project Guidelines

**Version:** 1.0.0
**Last Updated:** 2025-11-07
**Project Type:** Qwik + Cloudflare Workers Website

---

## Project Overview

This is the corporate website for Voltage Labs, a strategic consulting agency serving MBA executives and SMB owners in metro Boston. The site is built with Qwik framework and deployed to Cloudflare Workers.

**Core Value Proposition:** Day-by-day tactical playbooks for business transformation
**Target Audience:** 40-60 year old MBA executives and SMB owners
**Geographic Focus:** Metro Boston area

---

## Brand Guidelines

### Tone & Voice

**ALWAYS:**
- Use authoritative, direct, professional, academic language
- Focus on measurable ROI and outcomes
- Emphasize concrete, tactical, step-by-step guidance
- Write peer-to-peer (executive to executive)
- Be specific about deliverables and outcomes

**NEVER:**
- Use playful language or casual tone
- Include phrases like "we're passionate about" or "let's grow together"
- Use generic consultant-speak ("innovative solutions", "synergy", etc.)
- Add decorative elements or unnecessary flourishes
- Include emojis (except in documentation/markdown files if specifically requested)

### Good vs Bad Examples

✅ **Good:**
- "Transform Strategy Into Execution"
- "Measurable outcomes delivered through tactical playbooks"
- "ROI-driven strategic guidance designed for operational implementation"
- "Concrete, day-by-day transformation roadmaps"

❌ **Bad:**
- "We're passionate about helping you grow"
- "Innovative solutions for your business journey"
- "Let's collaborate to unlock your potential"
- "Synergistic partnerships for success"

---

## Design System

### Color Palette

```css
/* Light Mode */
--primary: #2563eb (Blue)
--secondary: #64748b (Slate)
--accent: #0ea5e9 (Sky Blue)
--background: #ffffff (White)
--foreground: #0f172a (Dark Slate)

/* Dark Mode */
--primary: #3b82f6 (Lighter Blue)
--background: #0f172a (Dark Slate)
--foreground: #f8fafc (Off White)
```

### Typography

- **Font Family:** Inter, Open Sans, or similar professional sans-serif
- **Scale:** Using fluid typography with `clamp()` for responsive sizing
- **Hierarchy:** Clear h1-h6 hierarchy with ample white space
- **Line Height:** 1.6 for body text, 1.2 for headings

### Layout Principles

- **Container Max Width:** 1200px
- **Grid System:** CSS Grid with responsive breakpoints
- **Spacing Scale:** CSS variables (--spacing-xs through --spacing-3xl)
- **Mobile-first:** Always design for mobile, enhance for desktop
- **White Space:** Ample padding and margins for clean, professional look

---

## Technical Architecture

### Stack

- **Framework:** Qwik 1.17.2 (resumability-first framework)
- **Deployment:** Cloudflare Workers / Cloudflare Pages
- **Language:** TypeScript
- **Styling:** CSS Modules + Global CSS Variables
- **Build:** Vite

### File Structure

```
src/
├── components/
│   ├── header/          # Navigation & dark mode toggle
│   ├── footer/          # Site footer
│   ├── logo/            # Smart logo component
│   ├── layout/          # Page layout wrapper
│   └── ui/              # Reusable UI components
├── routes/
│   ├── index.tsx        # Homepage
│   ├── services/        # Services page
│   ├── about/           # About page
│   └── contact/         # Contact page
├── utils/
│   ├── theme.ts         # Dark mode utilities
│   └── assets.ts        # Asset URL management (R2 integration)
├── global.css           # Design system & global styles
└── root.tsx             # Qwik root component
```

### Key Patterns

**Qwik Components:**
```typescript
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  // Use $ suffix for Qwik optimizer
  // Use useSignal() for reactive state
  return <div>Component JSX</div>;
});
```

**Qwik Routing:**
- File-based routing in `src/routes/`
- Use `layout.tsx` for shared layouts
- Export `DocumentHead` for SEO

**Dark Mode:**
- Theme state managed via Qwik signals
- CSS class `.dark` applied to root element
- Preference stored in localStorage
- Respects system preferences

---

## Development Guidelines

### Code Quality Standards

**Required:**
- TypeScript strict mode enabled
- ESLint with Qwik rules
- Prettier formatting
- WCAG 2.1 AA accessibility compliance
- Mobile-first responsive design
- SEO optimization on all pages

**Accessibility Checklist:**
- [ ] Semantic HTML (header, nav, main, footer, article, section)
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation support
- [ ] Focus indicators visible
- [ ] Color contrast meets 4.5:1 ratio
- [ ] Touch targets minimum 44x44px
- [ ] Skip-to-content link present

**SEO Checklist:**
- [ ] Unique title tag per page
- [ ] Meta description 140-160 characters
- [ ] OG tags for social sharing
- [ ] Semantic HTML structure
- [ ] Proper heading hierarchy
- [ ] Alt text on all images

### Component Development

**When creating new components:**

1. Create component directory: `src/components/component-name/`
2. Create files:
   - `component-name.tsx` (component logic)
   - `component-name.module.css` (scoped styles)
   - `index.ts` (export)
3. Use TypeScript interfaces for props
4. Follow Qwik patterns (`component$`, `$()`, signals)
5. Include accessibility attributes
6. Write responsive CSS (mobile-first)
7. Test dark mode appearance

### Page Development

**When creating new pages:**

1. Create in `src/routes/page-name/index.tsx`
2. Create `page-name.module.css` for page-specific styles
3. Export `DocumentHead` with SEO meta tags
4. Use Layout component for consistent header/footer
5. Use semantic HTML structure
6. Follow brand tone guidelines
7. Ensure mobile responsiveness
8. Test accessibility

---

## Logo Usage Guidelines

The site uses intelligent logo switching based on context:

**Desktop Light Mode:**
- Use: `full_logo_white_background_transparent.png`
- Shows: Full logo with company name

**Desktop Dark Mode:**
- Use: `voltage_labs_dark_background_logo_only.png`
- Shows: Icon only (better for dark backgrounds)

**Mobile (All Modes):**
- Use: `voltage_labs_logo_only_transparent.png`
- Shows: Icon only (saves space)

**Implementation:** See `/src/components/logo/logo.tsx` for CSS-based switching logic.

---

## Asset Management & Cloudflare R2 Integration

The site supports flexible asset management with both local development and Cloudflare R2 bucket integration for production.

### Architecture Overview

**Asset Utility (`/src/utils/assets.ts`):**
- Centralized asset URL management
- Environment-based routing (local vs. R2)
- SSR/SSG build-time safety
- Automatic fallback to local assets

**Key Function:**
```typescript
import { getAssetUrl } from "../../utils/assets";

// Usage in components
<img src={getAssetUrl("/logos/logo.png")} alt="Logo" />
```

### Environment Configuration

**Local Development:**
```bash
# Copy .env.example to .env.local
cp .env.example .env.local

# Option 1: Use local assets (leave empty)
PUBLIC_R2_BUCKET_URL=

# Option 2: Test with R2 bucket
PUBLIC_R2_BUCKET_URL=https://assets.voltagelabs.com
```

**Production (Cloudflare Pages):**
1. Navigate to Cloudflare Pages dashboard
2. Select project → Settings → Environment Variables
3. Add variable:
   - **Name:** `PUBLIC_R2_BUCKET_URL`
   - **Value:** `https://your-r2-bucket-url.com`
4. Redeploy site to apply changes

### Cloudflare R2 Bucket Setup

**Required Configuration:**

1. **Public Access:**
   - Enable public read access, OR
   - Configure custom domain (recommended)

2. **CORS Configuration:**
```json
{
  "AllowedOrigins": [
    "https://voltage-labs.pages.dev",
    "https://yourdomain.com",
    "http://localhost:5173"
  ],
  "AllowedMethods": ["GET"],
  "AllowedHeaders": ["*"],
  "MaxAgeSeconds": 3600
}
```

3. **Custom Domain (Recommended):**
   - Better performance via Cloudflare CDN
   - Improved branding and SEO
   - Example: `https://assets.voltagelabs.com`
   - Alternative: Use R2.dev subdomain (`https://pub-xxxxx.r2.dev`)

### Adding New Images from R2

**Method 1: Using Asset Utility (Recommended)**
```typescript
import { getAssetUrl } from "../../utils/assets";

export default component$(() => {
  return (
    <img
      src={getAssetUrl("/images/team/john-doe.jpg")}
      alt="John Doe"
      width="300"
      height="300"
    />
  );
});
```

**Method 2: Direct URL (Not Recommended)**
```typescript
// Avoid hardcoding - less flexible
<img src="https://assets.voltagelabs.com/images/photo.jpg" alt="Photo" />
```

### File Organization in R2 Bucket

**Recommended Structure:**
```
r2-bucket/
├── logos/
│   ├── full_logo_white_background_transparent.png
│   ├── voltage_labs_dark_background_logo_only.png
│   └── voltage_labs_logo_only_transparent.png
├── images/
│   ├── team/           # Team member photos
│   ├── clients/        # Client logos
│   ├── services/       # Service illustrations
│   └── blog/           # Blog post images
└── assets/
    ├── icons/          # UI icons
    └── backgrounds/    # Background images
```

### Image Optimization Best Practices

1. **Format Selection:**
   - Use WebP for photos (60-80% smaller than PNG/JPEG)
   - Use SVG for icons and logos when possible
   - Use PNG only when transparency is required

2. **Size Optimization:**
   - Compress images before uploading to R2
   - Create responsive variants (mobile, tablet, desktop)
   - Consider using Cloudflare Image Resizing for on-the-fly optimization

3. **Caching Strategy:**
   - Set appropriate Cache-Control headers in R2
   - Leverage Cloudflare CDN edge caching
   - Use versioned filenames for cache busting (e.g., `logo-v2.png`)

### Hybrid Asset Strategy

**Current Implementation:**
- **Critical logos:** Stored in `/public/logos/` for build reliability
- **Dynamic content:** Use R2 for team photos, client logos, blog images
- **Development:** Use local assets, toggle R2 via environment variable
- **Production:** Automatically serve from R2 when configured

**Benefits:**
- Site builds successfully even if R2 is temporarily unavailable
- Faster local development (no network requests)
- Easy testing of production asset configuration
- Seamless transition between environments

### Troubleshooting

**Images not loading from R2:**
- Verify `PUBLIC_R2_BUCKET_URL` is set correctly
- Check R2 bucket CORS configuration
- Ensure public read access is enabled
- Verify file paths match exactly (case-sensitive)
- Check browser console for CORS errors

**Mixed local/R2 images:**
- This is expected behavior during transition
- Update components incrementally to use `getAssetUrl()`
- Keep critical assets in `/public/` as fallback

**Build fails with R2 images:**
- Ensure `getAssetUrl()` handles SSR correctly
- Check that local copies exist in `/public/` for build-time rendering
- Verify TypeScript types are correct

### Performance Monitoring

**Recommended Metrics:**
- Image load times (should be < 500ms)
- Cache hit ratio (target > 90%)
- CDN edge location distribution
- Bandwidth usage and cost

**Tools:**
- Cloudflare Analytics (included with Pages)
- Browser DevTools Network tab
- Lighthouse performance audits

---

## Deployment

### Development

```bash
npm run dev          # Start dev server with HMR
npm run build        # Build for production
npm run build.types  # TypeScript type checking
npm run lint         # ESLint checking
npm run fmt          # Prettier formatting
```

### Cloudflare Deployment

```bash
npm run build.server  # Build with Cloudflare adapter
npm run deploy        # Deploy to Cloudflare Pages
npm run serve         # Preview with Wrangler
```

**Configuration:**
- `wrangler.toml`: Cloudflare Workers configuration
- `adapters/cloudflare-pages/vite.config.ts`: Build configuration
- `src/entry.cloudflare-pages.tsx`: Cloudflare entry point

---

## Common Tasks

### Adding a New Service

1. Update Services page (`src/routes/services/index.tsx`)
2. Add service card on homepage if it's a primary service
3. Update navigation if needed
4. Ensure outcome-focused language
5. Include expected timeline and deliverables

### Updating Contact Information

- Edit: `src/components/footer/footer.tsx`
- Edit: `src/routes/contact/index.tsx`
- Update both email and phone placeholders

### Adding Team Members

- Edit: `src/routes/about/index.tsx`
- Follow existing card structure
- Include: Photo, Name, Title, Bio
- Maintain professional tone

### Adding Images from R2 Bucket

To add new images from your Cloudflare R2 bucket:

1. Upload image to R2 bucket in appropriate directory (e.g., `/images/team/`)
2. Import asset utility: `import { getAssetUrl } from "../../utils/assets";`
3. Use in component: `<img src={getAssetUrl("/images/team/photo.jpg")} alt="Description" />`
4. Test locally (falls back to `/public/` if R2 URL not set)
5. Configure `PUBLIC_R2_BUCKET_URL` in Cloudflare Pages for production

See "Asset Management & Cloudflare R2 Integration" section for detailed instructions.

### Implementing Contact Form Backend

Currently the contact form logs to console. To implement:

1. Add Cloudflare Workers endpoint
2. Use Cloudflare Email Workers or SendGrid
3. Add server-side validation
4. Implement rate limiting
5. Add honeypot for spam protection
6. Update form action in `src/routes/contact/index.tsx`

---

## Performance Optimization

**Qwik Advantages:**
- Resumability (no hydration needed)
- Automatic code splitting
- Lazy loading by default
- Minimal JavaScript shipped

**Best Practices:**
- Keep components focused and small
- Use CSS Modules for scoped styles
- Optimize images (use WebP where possible)
- Minimize third-party scripts
- Use Cloudflare CDN for static assets

---

## Testing

**Manual Testing Checklist:**
- [ ] All pages render correctly
- [ ] Navigation works (desktop & mobile)
- [ ] Dark mode toggle functions
- [ ] Forms validate properly
- [ ] Links go to correct destinations
- [ ] Mobile menu opens/closes
- [ ] Images load correctly
- [ ] Site works in Chrome, Firefox, Safari, Edge
- [ ] Lighthouse score: Performance 90+, Accessibility 95+, SEO 95+

---

## Troubleshooting

**Dark mode not persisting:**
- Check localStorage in DevTools
- Verify theme utility is imported
- Ensure `useVisibleTask$` is running

**Logo not switching:**
- Check that logo files are in `/public/logos/`
- Verify file names match exactly
- Check CSS media queries in logo.module.css

**Build errors:**
- Run `npm run build.types` for TypeScript errors
- Run `npm run lint` for linting issues
- Check all imports resolve correctly

**Cloudflare deployment fails:**
- Verify wrangler.toml configuration
- Check Cloudflare account has Pages enabled
- Ensure build output directory is correct (`./dist`)

---

## Content Guidelines

### Homepage
- Hero should immediately communicate value proposition
- Services overview: max 3-4 primary services
- Social proof section updated with real client data when available

### Services Page
- Each service must have: What it is, How it works, Expected outcomes, Timeline
- Use playbook methodology language throughout
- Include specific deliverables

### About Page
- Company background: professional, authoritative
- Team bios: credentials and expertise-focused
- Values: outcome-oriented, measurable

### Contact Page
- Keep form simple: Name, Email, Company, Message
- Provide multiple contact methods
- Business hours clearly stated

---

## Brand Assets

**Logos:**
Location: `/public/logos/`

Required files:
1. `full_logo_white_background_transparent.png` - Primary logo
2. `full_logo_grey_background.png` - Alternative
3. `voltage_labs_logo_only_transparent.png` - Icon (light)
4. `voltage_labs_dark_background_logo_only.png` - Icon (dark)
5. `full_logo_white_background.png` - Standard

**Favicon:**
- Generated from `voltage_labs_logo_only_transparent.png`
- Location: `/public/favicon.svg`

---

## Security

**Headers:**
- Security headers configured in `/public/_headers`
- Includes: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection

**Form Security:**
- Input validation (client + server)
- CSRF protection needed when backend is added
- Rate limiting on form submissions
- Honeypot field for spam prevention

---

## Future Enhancements

**Planned:**
- Analytics integration (Cloudflare Web Analytics or similar)
- Contact form backend (Cloudflare Workers + Email Workers)
- Blog/insights section
- Case studies page
- Client testimonials with real data

**Considerations:**
- Newsletter signup
- Downloadable resources (playbook templates)
- ROI calculator tool
- Scheduling integration (Calendly or similar)

---

## Support & Maintenance

**Regular Tasks:**
- Update dependencies monthly
- Review and update content quarterly
- Monitor Lighthouse scores
- Check for broken links
- Review analytics data

**Version Control:**
- Use semantic versioning
- Tag releases
- Document changes in CHANGELOG.md

---

## Related Documentation

- `/guide-processor/` - General development guides (Qwik, Cloudflare, Frontend)
- `/public/logos/README.md` - Logo specifications
- `COMPONENTS.md` - Component API documentation
- `USAGE_EXAMPLE.md` - Implementation examples

---

**For questions or updates to these guidelines, create a Linear ticket with tag: `documentation`**
