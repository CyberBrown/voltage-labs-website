# Cloudflare R2 Integration Guide

**Last Updated:** 2025-11-10
**Version:** 1.0.0

Complete guide for integrating Cloudflare R2 object storage with the Voltage Labs website for image and asset hosting.

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [R2 Bucket Setup](#r2-bucket-setup)
4. [Custom Domain Configuration](#custom-domain-configuration)
5. [CORS Configuration](#cors-configuration)
6. [Upload Images to R2](#upload-images-to-r2)
7. [Configure Environment Variables](#configure-environment-variables)
8. [Using R2 Images in Components](#using-r2-images-in-components)
9. [Testing](#testing)
10. [Troubleshooting](#troubleshooting)

---

## Overview

This website includes a flexible asset management system that allows you to:
- Serve images from local `/public/` directory (development)
- Serve images from Cloudflare R2 bucket (production)
- Toggle between sources using environment variables
- Maintain build reliability with automatic fallbacks

**Benefits:**
- Faster image delivery via Cloudflare CDN
- Reduced deployment bundle size
- Centralized asset management
- Easy content updates without redeployment
- Cost-effective storage and bandwidth

---

## Prerequisites

Before starting, ensure you have:
- [ ] Active Cloudflare account
- [ ] Cloudflare R2 enabled on your account
- [ ] Access to Cloudflare Pages dashboard
- [ ] Images ready to upload (optimized and compressed)
- [ ] Domain name (for custom domain setup - optional but recommended)

---

## R2 Bucket Setup

### Step 1: Create R2 Bucket

1. Log into Cloudflare Dashboard
2. Navigate to **R2 Object Storage** in the left sidebar
3. Click **Create bucket**
4. Configure bucket:
   - **Bucket name:** `voltage-labs-assets` (or your preferred name)
   - **Location:** Automatic (Cloudflare selects optimal location)
5. Click **Create bucket**

### Step 2: Enable Public Access (Option A - Simple but less recommended)

⚠️ **Note:** Only use this for truly public assets. Custom domain (Option B) is recommended.

1. Open your bucket
2. Go to **Settings** tab
3. Under **Public Access**, click **Allow Access**
4. Copy the public bucket URL (format: `https://pub-xxxxx.r2.dev`)

### Step 3: Set Up Custom Domain (Option B - Recommended)

1. In your R2 bucket, go to **Settings** tab
2. Scroll to **Custom Domains**
3. Click **Connect Domain**
4. Enter your subdomain: `assets.voltagelabs.com`
5. Cloudflare will guide you through DNS setup:
   - If domain is on Cloudflare: DNS records added automatically
   - If external: Add provided CNAME record to your DNS provider
6. Wait for DNS propagation (usually 5-15 minutes)
7. Once verified, you'll see: `✓ Connected` status
8. Your R2 URL is now: `https://assets.voltagelabs.com`

**Benefits of custom domain:**
- Better branding and SEO
- Cloudflare CDN caching automatically enabled
- SSL/TLS included
- Improved performance
- Professional appearance

---

## CORS Configuration

Configure Cross-Origin Resource Sharing (CORS) to allow your website to load images from R2.

### Step 1: Set CORS Rules

1. In your R2 bucket, go to **Settings** tab
2. Scroll to **CORS Policy**
3. Click **Edit CORS Policy** or **Add CORS Policy**
4. Add the following JSON configuration:

```json
[
  {
    "AllowedOrigins": [
      "https://voltage-labs.pages.dev",
      "https://www.voltagelabs.com",
      "https://voltagelabs.com",
      "http://localhost:5173"
    ],
    "AllowedMethods": [
      "GET",
      "HEAD"
    ],
    "AllowedHeaders": [
      "*"
    ],
    "ExposeHeaders": [],
    "MaxAgeSeconds": 3600
  }
]
```

5. **Update the `AllowedOrigins` array** with:
   - Your Cloudflare Pages deployment URL
   - Your production domain(s)
   - `http://localhost:5173` (for local development)
   - Any staging/preview URLs

6. Click **Save**

### Step 2: Verify CORS Configuration

Test CORS using curl:

```bash
curl -I -H "Origin: https://voltage-labs.pages.dev" \
  https://assets.voltagelabs.com/logos/test-image.png
```

Look for header: `access-control-allow-origin: https://voltage-labs.pages.dev`

---

## Upload Images to R2

### Recommended Directory Structure

Organize your assets in R2 to match your codebase structure:

```
voltage-labs-assets/
├── logos/
│   ├── full_logo_white_background_transparent.png
│   ├── voltage_labs_dark_background_logo_only.png
│   └── voltage_labs_logo_only_transparent.png
├── images/
│   ├── team/
│   │   ├── john-doe.jpg
│   │   ├── jane-smith.jpg
│   │   └── alex-johnson.jpg
│   ├── clients/
│   │   ├── acme-corp-logo.png
│   │   ├── techco-logo.png
│   │   └── bizinc-logo.png
│   ├── services/
│   │   ├── strategy-consulting.jpg
│   │   └── operational-excellence.jpg
│   └── hero/
│       ├── homepage-hero.jpg
│       └── services-hero.jpg
└── assets/
    ├── icons/
    └── backgrounds/
```

### Upload Methods

**Method 1: Cloudflare Dashboard (Recommended for small batches)**

1. Open your R2 bucket
2. Click **Upload**
3. Drag and drop files or click to browse
4. Files upload with their paths preserved

**Method 2: Wrangler CLI (Recommended for bulk uploads)**

```bash
# Install Wrangler if not already installed
npm install -g wrangler

# Authenticate with Cloudflare
wrangler login

# Upload file
wrangler r2 object put voltage-labs-assets/images/team/john-doe.jpg \
  --file ./local/path/to/john-doe.jpg

# Upload directory recursively
wrangler r2 object put voltage-labs-assets/logos/ \
  --file ./public/logos/ --recursive
```

**Method 3: AWS S3 CLI (R2 is S3-compatible)**

1. Create API token in Cloudflare Dashboard:
   - **R2** → **Manage R2 API Tokens** → **Create API Token**
   - Permissions: Object Read & Write
   - Copy Access Key ID and Secret Access Key

2. Configure AWS CLI:
```bash
aws configure --profile r2
# AWS Access Key ID: <your-r2-access-key>
# AWS Secret Access Key: <your-r2-secret-key>
# Default region name: auto
# Default output format: json
```

3. Upload files:
```bash
# Upload single file
aws s3 cp ./image.jpg s3://voltage-labs-assets/images/team/image.jpg \
  --endpoint-url https://<account-id>.r2.cloudflarestorage.com \
  --profile r2

# Sync entire directory
aws s3 sync ./public/logos/ s3://voltage-labs-assets/logos/ \
  --endpoint-url https://<account-id>.r2.cloudflarestorage.com \
  --profile r2
```

### Image Optimization Tips

Before uploading, optimize images:

**1. Compress Images:**
```bash
# Using ImageMagick
convert input.jpg -quality 85 output.jpg

# Using cwebp (WebP format)
cwebp -q 80 input.jpg -o output.webp
```

**2. Resize for responsive variants:**
```bash
# Create multiple sizes
convert original.jpg -resize 400x400^ thumbnail.jpg
convert original.jpg -resize 800x800^ medium.jpg
convert original.jpg -resize 1600x1600^ large.jpg
```

**3. Recommended formats:**
- **WebP** for photos (best compression, modern browsers)
- **PNG** for logos with transparency
- **SVG** for icons and simple graphics
- **JPEG** as fallback for photos

---

## Configure Environment Variables

### Local Development Setup

1. **Copy the example environment file:**
```bash
cd /home/chris/voltage-labs-site
cp .env.example .env.local
```

2. **Edit `.env.local`:**
```bash
# Option A: Use local assets (default behavior)
PUBLIC_R2_BUCKET_URL=

# Option B: Test with R2 bucket
PUBLIC_R2_BUCKET_URL=https://assets.voltagelabs.com
```

3. **Restart dev server:**
```bash
npm run dev
```

### Production Setup (Cloudflare Pages)

1. **Navigate to Cloudflare Pages Dashboard:**
   - Go to **Workers & Pages**
   - Select your **voltage-labs** project
   - Click **Settings** tab
   - Click **Environment variables** in sidebar

2. **Add production variable:**
   - Click **Add variable**
   - **Variable name:** `PUBLIC_R2_BUCKET_URL`
   - **Value:** `https://assets.voltagelabs.com` (your R2 URL)
   - **Environment:** Production
   - Click **Save**

3. **Add preview/branch variables (optional):**
   - Repeat above for Preview environment
   - Can use different R2 bucket for staging if desired

4. **Redeploy site:**
   - Go to **Deployments** tab
   - Click **Retry deployment** on latest deployment
   - OR push a new commit to trigger automatic deployment

5. **Verify deployment:**
   - Check deployment logs for successful build
   - Visit your site and inspect image URLs in DevTools

---

## Using R2 Images in Components

### Basic Usage

Import and use the `getAssetUrl()` helper in any component:

```typescript
import { component$ } from "@builder.io/qwik";
import { getAssetUrl } from "../../utils/assets";

export default component$(() => {
  return (
    <div>
      <img
        src={getAssetUrl("/images/team/john-doe.jpg")}
        alt="John Doe, Senior Consultant"
        width="300"
        height="300"
      />
    </div>
  );
});
```

### Example: Update About Page with Team Photos

**Before (placeholder):**
```typescript
// src/routes/about/index.tsx
<div class="bg-gray-200 dark:bg-gray-700 h-48 flex items-center justify-center">
  <span class="text-gray-500">Photo</span>
</div>
```

**After (R2 image):**
```typescript
import { getAssetUrl } from "../../utils/assets";

<img
  src={getAssetUrl("/images/team/john-doe.jpg")}
  alt="John Doe, Lead Consultant"
  class="w-full h-48 object-cover"
  width="300"
  height="192"
/>
```

### Example: Client Logos on Homepage

```typescript
import { getAssetUrl } from "../../utils/assets";

const clientLogos = [
  { name: "Acme Corp", path: "/images/clients/acme-corp-logo.png" },
  { name: "TechCo", path: "/images/clients/techco-logo.png" },
  { name: "BizInc", path: "/images/clients/bizinc-logo.png" },
];

export default component$(() => {
  return (
    <div class="client-logos">
      {clientLogos.map((client) => (
        <img
          key={client.name}
          src={getAssetUrl(client.path)}
          alt={client.name}
          width="120"
          height="60"
        />
      ))}
    </div>
  );
});
```

### Example: Responsive Background Images

```typescript
import { getAssetUrl } from "../../utils/assets";

export default component$(() => {
  const heroImageUrl = getAssetUrl("/images/hero/homepage-hero.jpg");

  return (
    <div
      class="hero"
      style={{
        backgroundImage: `url('${heroImageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1>Transform Strategy Into Execution</h1>
    </div>
  );
});
```

### Preloading Critical Images

For above-the-fold images, use the preload helper:

```typescript
import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { getAssetUrl, preloadImage } from "../../utils/assets";

export default component$(() => {
  useVisibleTask$(() => {
    // Preload hero image for faster LCP
    preloadImage("/images/hero/homepage-hero.jpg");
  });

  return (
    <img
      src={getAssetUrl("/images/hero/homepage-hero.jpg")}
      alt="Hero"
      width="1200"
      height="600"
    />
  );
});
```

---

## Testing

### Test Checklist

**Local Development:**
- [ ] Images load correctly without R2 URL (using `/public/`)
- [ ] Images load correctly with R2 URL in `.env.local`
- [ ] Dev server restarts successfully after env changes
- [ ] No console errors related to image loading
- [ ] Images display on all pages (home, about, services, contact)

**Production:**
- [ ] Environment variable set in Cloudflare Pages
- [ ] Site redeployed after variable added
- [ ] Images load from R2 bucket (check URL in browser DevTools)
- [ ] No CORS errors in browser console
- [ ] Images load on first visit (not cached)
- [ ] Images cache properly on subsequent visits
- [ ] Dark mode logo switching works correctly
- [ ] Mobile responsive images display correctly

### Testing Commands

**1. Check environment variable:**
```bash
# Local
cat .env.local | grep PUBLIC_R2_BUCKET_URL

# Production (via Cloudflare Pages dashboard)
# Settings → Environment variables → Check PUBLIC_R2_BUCKET_URL value
```

**2. Test image accessibility:**
```bash
# Test direct R2 access
curl -I https://assets.voltagelabs.com/logos/full_logo_white_background_transparent.png

# Should return: HTTP/2 200
```

**3. Verify in browser:**
```javascript
// Open browser DevTools console on your site
// Run this to check current asset URL
const testUrl = document.querySelector('img').src;
console.log(testUrl);
// Should show: https://assets.voltagelabs.com/... (if R2 configured)
// Or: http://localhost:5173/... (if using local)
```

**4. Lighthouse audit:**
```bash
# Check image performance
npm run build
npm run preview

# Then run Lighthouse in Chrome DevTools
# Check: Performance, Accessibility scores
# Review: Image optimization suggestions
```

---

## Troubleshooting

### Images Not Loading from R2

**Symptom:** Images show broken or return 404 errors

**Solutions:**
1. Verify R2 bucket URL is correct in environment variable
2. Check image paths match exactly (case-sensitive)
3. Ensure images are uploaded to R2 at expected paths
4. Verify public access or custom domain is configured
5. Check browser DevTools Network tab for actual URLs being requested

```bash
# Test image exists in R2
curl -I https://assets.voltagelabs.com/images/test.jpg

# If 404: Image not uploaded or wrong path
# If 403: CORS or access issue
# If 200: Image exists, problem is elsewhere
```

### CORS Errors in Browser Console

**Symptom:** Console shows: `Access to image at '...' has been blocked by CORS policy`

**Solutions:**
1. Double-check CORS configuration in R2 bucket settings
2. Ensure your site's URL is in `AllowedOrigins` array
3. Include both `www` and non-`www` versions of domain
4. Add `http://localhost:5173` for local development
5. Wait a few minutes after CORS changes (may need propagation)

```javascript
// Test CORS from browser console
fetch('https://assets.voltagelabs.com/images/test.jpg', { method: 'HEAD' })
  .then(r => console.log('CORS OK:', r.status))
  .catch(e => console.error('CORS Error:', e));
```

### Environment Variable Not Working

**Symptom:** Local `.env.local` changes not reflected

**Solutions:**
1. Restart dev server after changing `.env.local`:
```bash
# Stop server (Ctrl+C)
npm run dev
```

2. Verify variable name is exactly: `PUBLIC_R2_BUCKET_URL`
3. Ensure `.env.local` is in project root
4. Check `.env.local` is not in `.gitignore` (it should be)
5. Try clearing Qwik cache:
```bash
rm -rf .qwik
npm run dev
```

### Images Load Locally but Not in Production

**Symptom:** Works in dev, fails after deployment

**Solutions:**
1. Verify Cloudflare Pages environment variable is set:
   - Pages dashboard → Settings → Environment variables
   - Confirm `PUBLIC_R2_BUCKET_URL` exists with correct value

2. Redeploy after adding environment variable:
   - Deployments tab → Retry latest deployment
   - OR push new commit to trigger rebuild

3. Check deployment logs for errors:
   - Deployments tab → View build log
   - Look for environment variable confirmation
   - Check for build errors

4. Clear Cloudflare cache:
   - Cloudflare dashboard → Caching → Purge Everything

### Mixed Local and R2 Images

**Symptom:** Some images from R2, some from local

**Solutions:**
This is expected during migration. To fix:

1. Update components to use `getAssetUrl()`:
```typescript
// Before
<img src="/images/photo.jpg" alt="Photo" />

// After
import { getAssetUrl } from "../../utils/assets";
<img src={getAssetUrl("/images/photo.jpg")} alt="Photo" />
```

2. Upload missing images to R2 matching their local paths

3. Keep critical assets (logos) in both `/public/` and R2 for reliability

### Slow Image Loading

**Symptom:** Images take long time to load

**Solutions:**
1. Ensure custom domain is configured (uses Cloudflare CDN)
2. Optimize images before uploading (compress, resize)
3. Use WebP format for better compression
4. Implement lazy loading for below-the-fold images:
```typescript
<img
  src={getAssetUrl("/images/large-photo.jpg")}
  alt="Photo"
  loading="lazy"
/>
```

5. Set cache headers in R2 (via Cloudflare dashboard):
   - Transform Rules → Modify Response Header
   - Cache-Control: `public, max-age=31536000, immutable`

### Build Fails After Adding R2 Integration

**Symptom:** `npm run build` fails with asset-related errors

**Solutions:**
1. Ensure local copies of critical images exist in `/public/`
2. Check `getAssetUrl()` implementation handles SSR correctly
3. Verify all imports are correct:
```typescript
import { getAssetUrl } from "../../utils/assets"; // Correct path
```

4. Clear build cache and rebuild:
```bash
rm -rf dist .qwik .cloudflare
npm run build
```

---

## Advanced Configuration

### Using Multiple R2 Buckets

For staging and production separation:

**`.env.local` (development):**
```bash
PUBLIC_R2_BUCKET_URL=https://staging-assets.voltagelabs.com
```

**Cloudflare Pages Production:**
```bash
PUBLIC_R2_BUCKET_URL=https://assets.voltagelabs.com
```

**Cloudflare Pages Preview:**
```bash
PUBLIC_R2_BUCKET_URL=https://staging-assets.voltagelabs.com
```

### Image Transformation with Cloudflare Images

For automatic resizing and optimization:

1. Enable Cloudflare Images (paid add-on)
2. Update `getAssetUrl()` to include transformations:

```typescript
export function getAssetUrl(path: string, transform?: string): string {
  const r2BucketUrl = import.meta.env.PUBLIC_R2_BUCKET_URL;

  if (r2BucketUrl) {
    const baseUrl = r2BucketUrl.replace(/\/$/, '');
    const transformPath = transform ? `/cdn-cgi/image/${transform}` : '';
    return `${baseUrl}${transformPath}${path}`;
  }

  return path;
}

// Usage:
<img src={getAssetUrl("/images/photo.jpg", "width=400,quality=80")} />
```

### Cache Busting Strategy

For updating images without URL changes:

**Option 1: Versioned filenames**
```bash
# Upload with version in filename
logo-v2.png
team-photo-2024.jpg
```

**Option 2: Query parameters**
```typescript
const version = "20241110";
<img src={`${getAssetUrl("/images/logo.png")}?v=${version}`} />
```

---

## Best Practices

### Security
- [ ] Never commit `.env.local` to git (already in `.gitignore`)
- [ ] Use custom domain instead of public R2 URLs when possible
- [ ] Restrict CORS to only necessary origins
- [ ] Monitor R2 access logs for unusual activity

### Performance
- [ ] Compress all images before uploading
- [ ] Use WebP format for 60-80% size reduction
- [ ] Implement lazy loading for below-fold images
- [ ] Set long cache expiration headers (1 year for immutable assets)
- [ ] Use responsive image variants for different screen sizes

### Organization
- [ ] Follow consistent naming conventions (lowercase, hyphens)
- [ ] Maintain logical directory structure in R2
- [ ] Document image dimensions and usage in comments
- [ ] Keep local copies of critical assets in `/public/` as backup

### Maintenance
- [ ] Audit R2 storage usage monthly
- [ ] Remove unused images to reduce costs
- [ ] Update images for rebranding across all assets
- [ ] Monitor Cloudflare Analytics for image delivery performance

---

## Cost Considerations

**Cloudflare R2 Pricing (as of 2024):**
- Storage: $0.015 per GB/month
- Class A operations (writes): $4.50 per million
- Class B operations (reads): $0.36 per million
- No egress fees (major advantage over S3)

**Example cost for Voltage Labs:**
- 5 GB storage: $0.075/month
- 100K image requests: $0.036/month
- **Total: ~$0.11/month** (essentially free)

**Compared to AWS S3:**
- Would include egress fees: ~$9/month for 100GB transfer
- R2 saves significantly on bandwidth costs

---

## Additional Resources

### Documentation
- [Cloudflare R2 Docs](https://developers.cloudflare.com/r2/)
- [Qwik Framework Docs](https://qwik.builder.io/docs/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)

### Tools
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [ImageOptim](https://imageoptim.com/) - Image compression
- [Squoosh](https://squoosh.app/) - Online image optimizer
- [Cloudflare Images](https://www.cloudflare.com/products/cloudflare-images/) - Paid image optimization

### Internal Documentation
- `.claude/CLAUDE.md` - Full project guidelines
- `.env.example` - Environment variable reference
- `src/utils/assets.ts` - Asset utility implementation
- `src/components/logo/logo.tsx` - Example R2 usage

---

## Support

**Questions or issues?**
1. Check troubleshooting section above
2. Review Cloudflare R2 documentation
3. Inspect browser DevTools console and Network tab
4. Contact Cloudflare support for R2-specific issues

**Found a bug or have a suggestion?**
- Create an issue in project repository
- Or contact the development team

---

**Document Version:** 1.0.0
**Last Updated:** 2025-11-10
**Maintained by:** Voltage Labs Development Team
