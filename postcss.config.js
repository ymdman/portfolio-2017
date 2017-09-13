const postcssEasyImport = require('postcss-easy-import');
const postcssCssnext = require('postcss-cssnext');
const styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  plugins: [
    postcssEasyImport({
      glob: true,
    }),
    postcssCssnext({
      browsers: ['last 2 versions'],
    }),
    styleLintPlugin,
  ],
};
