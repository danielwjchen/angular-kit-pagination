var path = require('path');
module.exports = {
    entry: './example/src/app.js',
    output: {
        filename: 'ng-kit.pagination.example.bundle.js',
        path: path.resolve(__dirname, 'example/dist')
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