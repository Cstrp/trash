module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-typescript/base',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-undef': 'off',
    'import/named': 0,
    '@typescript-eslint/quotes': ['warn', 'single'],
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-dynamic-require': 0,
    'import/order': 0,
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/object-curly-spacing': 0,
    '@typescript-eslint/no-implied-eval': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-expressions': [
      'off',
      {
        allowShortCircuit: true,
      },
    ],
    '@typescript-eslint/default-param-last': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'consistent-return': 0,
    'no-unused-vars': 0,
    'no-useless-constructor': 0,
    'class-methods-use-this': 0,
    'dot-notation': 'off',
    'no-restricted-syntax': 0,
    'no-param-reassign': 0,
    'no-return-await': 0,
    'no-use-before-define': 0,
    'no-await-in-loop': 0,
    'no-continue': 0,
    'no-plusplus': 0,
    'no-debugger': 1,
    'no-console': 0,
    'implicit-arrow-linebreak': 0,
    'no-nested-ternary': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/naming-convention': [
      'off',
      {
        selector: 'variable',
        format: ['camelCase'],
      },
    ],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: 'block',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: 'function',
        next: '*',
      },
    ],
    'linebreak-style': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    radix: ['error', 'as-needed'],
    'object-shorthand': ['error', 'methods'],
    'no-bitwise': [
      'error',
      {
        allow: ['~'],
      },
    ],
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],
    'max-lines-per-function': [
      'error',
      {
        max: 60,
      },
    ],
  },
};
