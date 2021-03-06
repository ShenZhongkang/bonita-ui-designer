/* globals exports, process */
// needed for ES6 to work in protractor <_<
require('babel-core/register');

const capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: [
      '--window-size=1920,1080'
    ]
  }
};

// activate chrome in headless mode
// see https://developers.google.com/web/updates/2017/04/headless-chrome
if (process.env.HEADLESS) {
  capabilities.chromeOptions.args = [
    ...capabilities.chromeOptions.args,
    '--headless',
    // Temporarily needed if running on Windows.
    '--disable-gpu',
    // We must disable the Chrome sandbox when running Chrome inside Docker
    '--no-sandbox'
  ];
}

exports.config = {
  seleniumServerJar: '../../node_modules/webdriver-manager/selenium/selenium-server-standalone-3.11.0.jar',
  chromeDriver: '../../node_modules/webdriver-manager/selenium/chromedriver_2.38',
  specs: [
    './spec/*.spec.js'
  ],
  capabilities,
  baseUrl: 'http://localhost:12001',
  onPrepare: function () {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        savePath: 'build/reports/e2e-tests/',
        filePrefix: 'e2e',
        consolidateAll: true
      }));
  }
};
