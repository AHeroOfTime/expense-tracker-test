module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    // 'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'no-unused-vars': 1,
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/button-has-type': 0,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-return-assign': 0,
    'no-param-reassign': 0,
  },
};
