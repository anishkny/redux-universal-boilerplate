process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function (config) {
  config.set({
    frameworks: [
      'mocha',
      'chai',
      'sinon'
    ],
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['-no-sandbox'],
      },
    },
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-chrome-launcher',
      'karma-sourcemap-loader',
      'karma-coverage',
      require('karma-webpack')
    ],
    reporters: ['dots'],
    preprocessors: {
      'entry.js': [
        'webpack',
        'sourcemap'
      ]
    },
    webpack: require('../webpack/tests.config'),
    webpackServer: {
      watchOptions: {
        aggregateTimeout: 500,
        poll: 1000
      },
      stats: {
        colors: true
      },
      noInfo: true
    },
    files: [
      'entry.js'
    ]
  })
}
