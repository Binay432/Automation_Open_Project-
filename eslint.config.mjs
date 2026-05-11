import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import playwrightPlugin from 'eslint-plugin-playwright';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      playwright: playwrightPlugin,
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',

      // Playwright-specific rules
      'playwright/no-wait-for-timeout':    'error',   // ban sleep()
      'playwright/no-force-option':        'warn',    // flag force clicks
      'playwright/prefer-web-first-assertions': 'error', // toBeVisible() not isVisible()
      'playwright/no-element-handle':      'error',   // ban old $ API
      'playwright/no-useless-await':       'warn',
    },
  },
];