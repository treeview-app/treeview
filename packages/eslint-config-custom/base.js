// TODO: Prettier (plugin)
// TODO: Import (plugin)
module.exports = {
  plugins: ["functional"],
  extends: [
    'plugin:prefer-type-alias/recommended',
    'plugin:import/recommended',
    'plugin:functional/recommended',
    'plugin:functional/stylistic',
    'eslint:recommended',
    "prettier",
    "turbo"
  ],
  rules: {
    curly: 'warn',
    eqeqeq: 'warn',
    'prefer-template': 'warn',
    'func-style': ['warn', 'declaration'],
    'no-negated-condition': 'warn',
    'no-else-return': 'warn',
    'no-nested-ternary': 'warn',
    'import/order': 'warn',
    'import/first': 'warn',
    'import/exports-last': 'warn',
    'functional/no-class': 'error',
    'functional/no-return-void': 'off',
    'functional/no-expression-statement': 'off',
    'functional/functional-parameters': 'off',
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'functional/no-expression-statement': 'off',
        'functional/immutable-data': 'off',
      },
    },
  ],
};
