module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  rules: {
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-plusplus': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/aria-role': 'off',
    'react/jsx-filename-extension': 'off',
    'prettier/prettier': ['warn', { trailingComma: 'all', singleQuote: true }],
  },
};
