/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline';
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https://placehold.co;
              connect-src 'self' https://api.example.com;
              font-src 'self';
              object-src 'none';
              frame-src 'none';
            `.replace(/\n/g, ''),
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
