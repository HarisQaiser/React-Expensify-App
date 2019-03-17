// entry -> output
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = (env) => {
    const isProduction = env === 'production';
    // const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    // const CSSExtract = new ExtractTextPlugin('styles.css');

    return{
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
         test: /\.s?css$/,
         use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: '../'
              }
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            },
            {
                loader: 'sass-loader',
                options:{
                    sourceMap: true
               }
             }
           ]
         }]
    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
      ],
    
    mode: 'production',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
  }
};