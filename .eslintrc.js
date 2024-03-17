// .eslintrc.js example
module.exports = {
  env: {
      browser: true,
      es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  // ignorePatterns is added to exclude .estlintrc.js file of the linter's scope
  // This is due to add extends: ['eslint:recommended']
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  root: true,
  rules: {
    // This is a custom rule created for no-unused-vars
    // This would be overriding the @typescript-eslint/no-unused-vars
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_'
      }
    ],
  }
}
