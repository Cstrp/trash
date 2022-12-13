const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('@soda/friendly-errors-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const glob = require('glob');

const isProd = process.env.NODE_ENV === 'production';

const getPageName = (filePath) => {
  const reg = /src\/pages\/([^/]*)/;
  const match = filePath.match(reg);
  return match ? match[1] : null;
};

const entryFiles = glob.sync(path.resolve(__dirname, `../src/pages/*/index.{ts,jsx,tsx}`));

const entry = {};

const htmlWebpackPlugins = [];

entryFiles.forEach((filePath) => {
  const pageName = getPageName(filePath);
  if (!pageName) {
    throw new Error(`Oops ${filePath} is not defined`);
  }

  entry[pageName] = filePath;

  htmlWebpackPlugins.push(
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `../src/pages/${pageName}/index.html`),
      filename: `${pageName}.html`,
      inject: 'body',
      chunks: [pageName],
      minify: {
        minifyJS: true,
      },
    }),
  );
});

module.exports = {
  entry: entry,
  output: {
    clean: true,
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@data': path.resolve(__dirname, '../src/data'),
      '@view': path.resolve(__dirname, '../src/view'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss', '.less'],
  },
  plugins: [
    ...htmlWebpackPlugins,
    new FriendlyErrorsPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'ts', 'tsx'],
      failOnError: false,
      exclude: 'node_modules',
    }),
  ].filter(Boolean),
  optimization: {
    splitChunks: {
      minSize: 5000,
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'reactVendor',
          chunks: 'all',
          priority: 1,
        },
        defaultVendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'defaultVendor',
          chunks: 'all',
          minChunks: 1,
          priority: 0,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workerParallelJobs: 2,
              cacheGroups: {
                default: {
                  reuseExistingChunk: true,
                  chunks: 'all',
                  priority: -20,
                  name: 'default',
                  test: /\.(ts|js)$/,
                  enforce: true,
                  minSize: 0,
                  minChunks: 1,
                },
              },
            },
          },
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico|avif|mp3)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/img/[name][hash][ext][query]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/font/[name].[ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors',
          enforce: true,
          minSize: 0,
          minChunks: 1,
        },
      },
    },
    runtimeChunk: {
      name: 'runtime',
    },
  },
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '../cache'),
    hashAlgorithm: 'md5',
    buildDependencies: {
      config: [path.join(__dirname, '../webpack.config.js')],
    },
  },
  experiments: {
    asyncWebAssembly: true,
  },
};
