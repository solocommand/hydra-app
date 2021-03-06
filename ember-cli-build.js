'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('node_modules/owasp-password-strength-test/owasp-password-strength-test.js');

  // Bootstrap JS and source maps.
  app.import('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
  app.import('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map', { destDir: 'assets' });
  app.import('node_modules/bootstrap/dist/css/bootstrap.min.css.map', { destDir: 'assets' });

  app.import('node_modules/ionicons/css/ionicons.min.css');
  app.import('node_modules/ionicons/css/ionicons.min.css.map', { destDir: 'assets' });

  var ionicons = new Funnel('node_modules/ionicons/fonts', {
    srcDir: '/',
    include: [ '*.*' ],
    destDir: '/fonts'
  });

  return app.toTree(ionicons);
};
