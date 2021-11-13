const path = require("path");
const webpack = require("webpack");

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
      {
        test: /\.txt$/,
        exclude: /node_modules/,
        type: 'asset/source',
      },
    ],
  },
  plugins: [
    new webpack.CleanPlugin(),
  ],
};
