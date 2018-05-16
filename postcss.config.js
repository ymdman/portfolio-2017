module.exports = {
  plugins: {
    'postcss-easy-import': {
      glob: true,
    },
    'stylelint-webpack-plugin': {},
    'postcss-sorting': {
      'properties-order': 'alphabetical',
    },
    'postcss-cssnext': {
      browsers: 'last 2 major versions',
    },
    cssnano: {
      autoprefixer: false,
      zindex: false,
      normalizeCharset: false,
      minifySelectors: false,
      reduceIdents: false,
    },
  },
};
