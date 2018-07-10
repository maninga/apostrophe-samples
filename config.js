// Modules settings specific to this app.
var path = require('path');

module.exports = {
  // We must declare the bundle to use apostrophe-blog or apostrophe-events !
  // bundles: [ 'apostrophe-blog' ],
  // bundles: [ 'apostrophe-events' ],
  // bundles: [ 'apostrophe-blog', 'apostrophe-events' ],

  // Add custom apostrophe-modules and their respective configuration here!
  modules: {
    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.

    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': {
      viewsFolderFallback: path.join(__dirname, 'views')
      // See also lib/modules/apostrophe-templates/index.js
    },

    // see lib/modules/one-column-widgets/index.js, et cetera
    // Use index.js files for each module to keep app.js readable

    'one-column-widgets': {},
    'two-column-widgets': {},
    'three-column-widgets': {},
    'products': {},
    'products-pages': {},
    // People who specialize in various products
    'specialists': {},
    'specialists-pages': {},
    'theme': {}
  }
};
