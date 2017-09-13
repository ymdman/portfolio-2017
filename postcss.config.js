const postcssEasyImport = require('postcss-easy-import');
const postcssCssnext = require('postcss-cssnext');
// const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    postcssEasyImport({
      glob: true,
    }),
    postcssCssnext({
      browsers: ['last 2 versions'],
    }),
    // autoprefixer,
  ],
};
