const path = require('path');
const glob = require('glob');
const PrettierPlugin = require("prettier-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const getPackageJson = require('./scripts/getPackageJson');

const { name, version } = getPackageJson();

const entry = glob.sync("./src/*/index.+(js|jsx|ts|tsx)")
    .reduce((x, y) => {
      const key = y.split('/')[2];
      return Object.assign(x, {
        [key]: y
      });
    }, {});

module.exports = {
  mode: "production",
  entry,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'var',
    library: 'PRSSComponent'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        /**
         * Dependencies are disclosed in a LICENSE file
         */
        extractComments: {
          condition: /^\**!|@preserve|@license|@cc_on/i,
          filename: (file, fileData) => {
            return file.replace(/\.(\w+)($|\?)/, '.$1.LICENSE.txt$2');
          },
          banner: (licenseFile) => {
            return `License information can be found in https://cdn.jsdelivr.net/npm/${name}@${version}/build/${licenseFile}`;
          },
        },
      })
    ],
  },
  module: {
    rules: [
      {
        test: /\.m?js(x?)|ts(x?)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: 'style-loader',
            /**
             * Prepend styles
             */
            options: {
              insert: function insertAtTop(element) {
                var parent = document.querySelector('head');
                var lastInsertedElement =
                  window._lastElementInsertedByStyleLoader;

                if (!lastInsertedElement) {
                  parent.insertBefore(element, parent.firstChild);
                } else if (lastInsertedElement.nextSibling) {
                  parent.insertBefore(element, lastInsertedElement.nextSibling);
                } else {
                  parent.appendChild(element);
                }

                window._lastElementInsertedByStyleLoader = element;
              },
            },
          }, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        use: ['url-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  performance: {
    hints: false
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new PrettierPlugin({
      printWidth: 80,
      tabWidth: 2,
      semi: true,
      singleQuote: true,
      jsxSingleQuote: false,
      bracketSpacing: true
    })
  ]
};