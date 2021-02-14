module.exports = {
  env: {
    browser: true,
    es6: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-prototype-builtins': 0,
    'no-undef': 0,
    'no-use-before-define': 0,
    'no-unused-vars': 0,
    'accessor-pairs': 0
  },
  extends: 'standard',
  plugins: ['standard', 'promise'],
  settings: {
    react: {
      version: '17.0.1'
    }
  }
}
