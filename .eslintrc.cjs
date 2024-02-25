module.exports = {
  env: {
    es2021: true,
    jest: true,
    node: true
  },
  ignorePatterns: ['**/dist/**/*.js'],
  overrides: [
    {
      extends: ['standard-with-typescript', 'prettier'],
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.linter.json',
        tsconfigRootDir: '.'
      }
    }
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    //FIXME: This rule is disabled due to this issue: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/50871
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksConditionals: true, checksVoidReturn: false, checksSpreads: true }
    ]
  }
}
