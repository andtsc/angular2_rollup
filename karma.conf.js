module.exports = function(config) {
  config.set({

    basePath: './',

    frameworks: ['jasmine'],

    files: [
      // Polyfills.
      'node_modules/core-js/client/shim.min.js',

      'node_modules/reflect-metadata/Reflect.js',

      // System.js for module loading
      'node_modules/systemjs/public/system-polyfills.js',
      'node_modules/systemjs/public/system.src.js',

      // Zone.js dependencies
      'node_modules/zone.js/public/zone.js',
      'node_modules/zone.js/public/long-stack-trace-zone.js',
      'node_modules/zone.js/public/proxy.js',
      'node_modules/zone.js/public/sync-test.js',
      'node_modules/zone.js/public/jasmine-patch.js',
      'node_modules/zone.js/public/async-test.js',
      'node_modules/zone.js/public/fake-async-test.js',

      // RxJs.
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },


      {pattern: 'karma-test-shim.js', included: true, watched: true},

      // paths loaded via module imports
      // Angular itself
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: true},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true},

      // Our built application code
      {pattern: 'public/**/*.js', included: false, watched: true},

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: 'public/**/*.html', included: false, watched: true},
      {pattern: 'public/**/*.css', included: false, watched: true},

      // paths to support debugging with source maps in dev tools
      {pattern: 'src/**/*.ts', included: false, watched: true},
      //{pattern: 'public/**/*.js.map', included: false, watched: false}
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/app/": "/base/public/app/"
    },

    reporters: ['progress', 'verbose'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
