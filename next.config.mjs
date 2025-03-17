/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3t3ozftmdmh3i.cloudfront.net",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true, // For Netlify static deployment
  },
  // Disable Turbopack to avoid conflicts with Webpack
  experimental: {
    turbo: false,
    serverComponentsExternalPackages: [],
  },
  // Ensure compatibility with Netlify
  webpack: (config, { isServer }) => {
    // Fix for the bundler conflict
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "react-server-dom-turbopack/client": "react-server-dom-webpack/client",
      };
    }
    return config;
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: false,
  // Output static HTML files for each page
  output: "export",
};

export default nextConfig;
