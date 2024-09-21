module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/antd/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
        },
      },
    });
    return config;
  },
};








// const nextConfig = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.m?js/,
//       resolve: {
//         fullySpecified: false,
//       },
//     });
//     return config;
//   },
// };

// module.exports = nextConfig;





// // next.config.js
// const withTM = require('next-transpile-modules')(['antd', 'rc-pagination']);

// module.exports = withTM({
//   reactStrictMode: true,
// });








// const withTM = require('next-transpile-modules')([
//   'rc-util',
//   'antd',
//   '@ant-design/icons',
// ]);

// module.exports = withTM({
//   reactStrictMode: true,
// });
