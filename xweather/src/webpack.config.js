// const path = require('path');

// module.exports = {
//    mode: 'development', // or 'production' depending on your needs
//    entry: './src/index.js', // update with your actual entry point
//    output: {
//       path: path.resolve(__dirname, 'dist'), // specify output directory
//       filename: 'bundle.js' // output file name
//    },
//    resolve: {
//       fallback: {
//          "stream": require.resolve("stream-browserify"), // polyfill for stream
//          "http": false,  // ignore http
//          "https": false, // ignore https
//          "url": require.resolve("url/"), // polyfill for url
//          "zlib": false, // ignore zlib
//       }
//    },
//    module: {
//       rules: [
//          {
//             test: /\.jsx?$/, // if you use .js or .jsx files
//             exclude: /node_modules/,
//             use: {
//                loader: 'babel-loader', // assuming you're using Babel
//                options: {
//                   presets: ['@babel/preset-env', '@babel/preset-react'] // adjust as necessary
//                }
//             }
//          },
//          // Add any additional loaders here
//       ]
//    },
//    // Additional configuration (devServer, plugins, etc.) can go here
// };
