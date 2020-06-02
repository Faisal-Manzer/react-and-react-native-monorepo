const {
  override,
  addWebpackResolve,
} = require('customize-cra');

const path = require('path');

module.exports = override(
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
);
