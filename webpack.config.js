const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    library: 'CAChecker',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'build'),
    filename: 'cryptocurrency-address-checker.min.js'
  }
};
