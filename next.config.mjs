/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Disable server-side features for static export
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // SEO and domain configuration
  env: {
    SITE_URL: 'https://kobek.sa',
    SITE_NAME: 'Kobek',
  },
}
export default nextConfig
