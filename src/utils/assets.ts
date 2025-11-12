/**
 * Asset URL Management Utility
 *
 * Provides centralized asset URL handling with support for:
 * - Local development (serves from /public/)
 * - Production with Cloudflare R2 bucket
 * - SSR/SSG build-time safety
 *
 * Configuration:
 * - Set PUBLIC_R2_BUCKET_URL environment variable to your R2 bucket URL
 * - Example: https://assets.yourdomain.com or https://your-bucket.r2.dev
 */

/**
 * Get the full URL for an asset, with environment-based routing
 *
 * @param path - Asset path starting with / (e.g., "/logos/image.png")
 * @returns Full URL to the asset
 *
 * @example
 * // In development (no R2 URL set):
 * getAssetUrl("/logos/logo.png") // returns "/logos/logo.png"
 *
 * // In production (with R2 URL):
 * getAssetUrl("/logos/logo.png") // returns "https://r2-bucket.com/logos/logo.png"
 */
export function getAssetUrl(path: string): string {
  // Get R2 bucket URL from environment variable
  const r2BucketUrl = import.meta.env.PUBLIC_R2_BUCKET_URL;

  // During SSR/SSG build, always use local paths to ensure builds succeed
  // even if R2 is temporarily unavailable
  if (typeof window === 'undefined' && !r2BucketUrl) {
    return path;
  }

  // If R2 URL is configured, use it; otherwise fall back to local path
  if (r2BucketUrl) {
    // Remove trailing slash from bucket URL if present
    const baseUrl = r2BucketUrl.endsWith('/')
      ? r2BucketUrl.slice(0, -1)
      : r2BucketUrl;

    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    return `${baseUrl}${normalizedPath}`;
  }

  // Fallback to local path
  return path;
}

/**
 * Preload an image asset
 * Useful for critical images that should load ASAP
 *
 * @param path - Asset path
 */
export function preloadImage(path: string): void {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = getAssetUrl(path);
  document.head.appendChild(link);
}
