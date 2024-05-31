module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['**/*.test.tsx'],
  plugins: ['react', 'prettier', 'jest', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
