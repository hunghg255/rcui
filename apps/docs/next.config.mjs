import { withLogtail } from '@logtail/next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/**
 * @type {import('next').NextConfig}
 */
const config = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        hostname: 'img.logo.dev',
        protocol: 'https',
      },
    ],
  },
  staticPageGenerationTimeout: 180,
  eslint: {
    "ignoreDuringBuilds": true
  },
  "typescript": {
    "ignoreBuildErrors": true
  },

  // biome-ignore lint/suspicious/useAwait: "redirects is async"
  async redirects() {
    return [
      { source: '/', destination: '/overview', permanent: false },
      {
        source: '/components',
        destination: '/components/dialog',
        permanent: false,
      },
      {
        source: '/dialog',
        destination: '/components/dialog',
        permanent: true,
      },
      {
        source: '/picker',
        destination: '/components/picker',
        permanent: true,
      },
      {
        source: '/select',
        destination: '/components/select',
        permanent: true,
      },
      {
        source: '/tooltip',
        destination: '/components/tooltip',
        permanent: true,
      },
    ];
  },
};

let nextConfig = withMDX(withLogtail({ ...config }));

if (process.env.ANALYZE === 'true') {
  nextConfig = withBundleAnalyzer()(nextConfig);
}

export default nextConfig;
