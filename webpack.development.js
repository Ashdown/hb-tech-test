const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// doesn't support webpack 5 yet
// const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');

module.exports = {
  mode: 'development',
  // All other relative paths are relative to the context. Unless path.join(--dirname) is used - SFR 2021-02-15
  context: path.resolve(__dirname, './src'),
  entry: ['react', 'react-dom', 'react-refresh/runtime', './index.tsx'],
  // replace inline-source-maps as a performance optimisation suggested by webpack
  devtool: 'eval-cheap-module-source-map',
  target: 'web',
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  optimization: {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },

  resolve: {
    // Tells webpack which file extensions to resolve - SFR 2021-02-15
    extensions: ['.ts', '.tsx', '.js', '.json', '.d.ts'],
    // Tells webpack which file to use if the import is to a directory - SFR 2021-02-15
    mainFiles: ['index'],
    // Tells webpack where to look for aliased imports - SFR 2021-02-15
    modules: [path.resolve(__dirname, 'node_modules'), './src'],
    symlinks: false,
  },

  devServer: {
    open: true,
    hot: true,
    overlay: true,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: {
      disableDotRule: true,
    },
    noInfo: true,
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    // logs the progress of compilation
    new webpack.ProgressPlugin(),
    // sets values to process.env
    new webpack.EnvironmentPlugin({
      APP_VERSION: process.env.APP_VERSION,
      // To select the correct config depending on the build
      APP_ENV: process.env.API || 'development',
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: './assets/favicon.ico',
    }),
    // allows hot module replacement
    new webpack.HotModuleReplacementPlugin(),
    // HMR support for react app
    new ReactRefreshWebpackPlugin(),
    // No webpack 5 support yet. Leaving this here until then to not lose the configuration - SFR 2021-02-18
    // new UnusedFilesWebpackPlugin({
    //   globOptions: {
    //     ignore: [
    //       'libraries/wings-ui/styleguide/**/*',
    //       'node_modules/**/*',
    //       '**/*.test.js',
    //       '**/*.mock.js',
    //       '**/*.md',
    //       '**/*.d.ts',
    //       'test/**',
    //       'config/**',
    //     ],
    //   },
    // }),
  ],

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        // We define development specific options here.
        // Only use plugins not provided by the presets and that do not optimise the code.
        // This improves speed by avoiding unnecessary processing
        options: {
          presets: [
            [
              // adds relevant plugins depending on the target environment
              '@babel/preset-env',
              {
                // outputs esmodule syntax (i.e latest JS)
                targets: {
                  esmodules: true,
                },
              },
            ],
            ['@babel/preset-react', { development: true }],
            '@babel/preset-typescript',
          ],
          plugins: [
            // support for HMR
            'react-refresh/babel',
          ],
        },
      },
    ],
  },
};
