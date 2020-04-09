const path = require('path');
const glob = require('glob');
const PrettierPlugin = require("prettier-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const getPackageJson = require('./scripts/getPackageJson');

const {
  version,
  name,
  license,
  homepage,
  author = '',
} = getPackageJson();

function modify(buffer) {
  const { title, type, parser} = JSON.parse(buffer.toString());

  const newManifest = {
    name,
    title,
    version,
    author: author.replace(/ *\<[^)]*(\)|\>) */g, ""),
    homepage,
    license,
    type,
    parser
  }

  const manifestJSON = JSON.stringify(newManifest, null, 2);
  return manifestJSON;
}

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
    path: path.resolve(__dirname, 'build', name),
    libraryTarget: 'var',
    library: 'PRSSComponent'
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
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new PrettierPlugin(),
    new CopyPlugin([
      { from: 'public', to: './' }
    ]),
    new CopyPlugin([
      {
         from: "./public/manifest.json",
         to:   `./manifest.json`,
         transform (content, path) {
             return modify(content)
         },
         force: true
      }])
  ]
};