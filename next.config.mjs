/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/v4/swagger-ui.html',
        destination: 'https://open-api.openocean.finance/v4/swagger-ui.html',
        permanent: false,
      },
      {
        source: '/docs/widget/v2',
        destination: '/docs/widget/v2/getting-started',
        permanent: false,
      },
      {
        source: '/docs/developer-resources',
        destination: '/docs/developer-resources/errors',
        permanent: false,
      },
      {
        source: '/docs/ai-agents/skills',
        destination: '/docs/ai-agents',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
