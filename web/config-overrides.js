const {
  override,
  addWebpackResolve,
} = require('customize-cra');
const postcss = require('react-app-rewire-postcss');
const path = require('path');

module.exports = (config) => {
  override(
    /**
     * Resolve all dependency
     * which can clash
     */
    addWebpackResolve({
      alias: {
        react: path.resolve(__dirname, '../', 'node_modules', 'react'),
        'react-redux': path.resolve(__dirname, '../', 'node_modules', 'react-redux'),
      },
    }),
  )(config);
  postcss(config, true);

  return config;
};
