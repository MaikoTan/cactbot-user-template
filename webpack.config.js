const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

/** @type {webpack.Configuration} */
module.exports = {
  mode: "production",
  entry: {
    dps: "./src/dps/index.js",
    eureka: "./src/eureka/index.js",
    fisher: "./src/fisher/index.js",
    jobs: "./src/jobs/index.js",
    oopsyraidsy: "./src/oopsyraidsy/index.js",
    pullcounter: "./src/pullcounter/index.js",
    radar: "./src/radar/index.js",
    raidboss: "./src/raidboss/index.js",
  },
  output: {
    assetModuleFilename: "[name].[hash:8][ext]",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|cjs|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    chrome: "75",
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.CleanPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "./src/raidboss/data/**/*.txt",
          to: "./[name][ext]",
        },
      ],
    }),
  ],
};
