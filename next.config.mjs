import withTM from 'next-transpile-modules';

const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  // other configurations
};

export default withPlugins(
  [
    withTM(['rc-util', 'antd']), // Transpile the necessary modules
  ],
  nextConfig
);






// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
