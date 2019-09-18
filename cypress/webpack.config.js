const config = {
  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            presets: ['@babel/preset-typescript'],
            babelrc: false,
          },
        },
      },
    ],
  },
};

module.exports = config;
