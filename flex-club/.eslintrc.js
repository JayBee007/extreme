module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'airbnb',
    'react-app',
    'plugin:prettier/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', 'prettier', 'import', 'jsx-a11y'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off'
  }
};
