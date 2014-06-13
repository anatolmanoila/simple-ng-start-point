exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['./e2e/**/*.spec.js'],
  baseUrl:'http://localhost:3000',

  rootElement: 'html',
  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 3000
  }
};