import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
 output: 'export',
 trailingSlash: true,
 basePath: '/__GITHUB_PAGES_BASE__',
 images: { unoptimized: true },
};
export default nextConfig;
