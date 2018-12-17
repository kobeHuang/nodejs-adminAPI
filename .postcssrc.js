module.exports = {
    "plugins": [
      require('postcss-salad'),
      // to edit target browsers: use "browserslist" field in package.json
      require('autoprefixer'),
      pxtorem({ rootValue: 100, propWhiteList: [] })
    ]
  }