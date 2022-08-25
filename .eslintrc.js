module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    '@react-native-community',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'max-len': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',
        'eol-last': 'off',
      },
    },
  ],
};
