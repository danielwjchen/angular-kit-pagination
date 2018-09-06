var path = require('path');
module.exports = {
    entry: './index.js',
    output: {
        filename: 'ng-kit.pagination.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    externals: {
      'angular': 'angular',
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            use: ["source-map-loader"],
            enforce: "pre"
          }
        ]
      }
};