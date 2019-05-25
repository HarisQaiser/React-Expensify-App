// entry -> output
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// process.env.NODE_ENV = process.env.NODE_ENV || "production";

// if (process.env.NODE_ENV === "test") {
//   require("dotenv").config({ path: '.env.test' });
// } else if (process.env.NODE_ENV === "development") {
//   require("dotenv").config({ path: '.env.development' });
// }

// const dotenv = require('dotenv');
// const env = dotenv.config().parsed || [];
// envKeys = Object.keys(env).reduce((prev, next) => {
//   prev[`process.env.${next}`] = JSON.stringify(env[next]);
//   return prev;
// }, {})

module.exports = env => {
  const isProduction = env === "development";
  // const MiniCssExtractPlugin = require("mini-css-extract-plugin");
  // const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js"
      //chunkFilename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: "../"
              }
            },
            {
              loader: "fast-css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "fast-sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
    //   new webpack.DefinePlugin(envKeys, {
    //  // new webpack.DefinePlugin({
    //     'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
    //     'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
    //     'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
    //     'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
    //     'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
    //     'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
    //     'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
    //   })
    ],

    mode: "development",
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      publicPath: "/dist/",
      watchContentBase: true
    },
    performance: {
      hints: false,
      maxEntrypointSize: 400000,
      maxAssetSize: 100000
    }
  };
};
