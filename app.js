const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const appName = process.env.APP_NAME || 'apostrophe-samples';
const appTld = process.env.APP_TLD || 'devel';
const baseUrl = appName.replace(/-/g, '.') + '.' + appTld;

const options = {
  shortName: appName,
  title: appName,
  baseUrl: baseUrl,
  modules: require('./config').modules
};

if (process.env.APP_ROOT_DIR) {
  options.rootDir = process.env.APP_ROOT_DIR;
}

var apos = require('apostrophe')(options);
