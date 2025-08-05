const path = require("path");
const glob = require("glob");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const entry = glob.sync("./src/*/index.+(js|jsx|ts|tsx)")
  .reduce((x, y) => {
    const key = y.split("/")[2];
    return Object.assign(x, {
      [key]: y
    });
  }, {});

console.log("entry", entry);

module.exports = {
  mode: "production",
  entry,
  devtool: "source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    libraryTarget: "var",
    library: "PRSSComponent",
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
    splitChunks: {
      chunks: /\.s?css$/,
      cacheGroups: {
        // Merge all the CSS into one file
        theme: {
          name: "theme",
          test: /\.s?css$/,
          chunks: "all",
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js(x?)|ts(x?)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        use: ["url-loader"],
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src/_common")
    }
  },
  performance: {
    hints: false
  },
  externals: {
    "prss": "PRSS",
    "@prss/ui": "PRSS",
    "react": "React",
    "react-dom": "ReactDOM",
    "react-dom/client": "ReactDOM"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "theme.css"
    }),
  ]
};