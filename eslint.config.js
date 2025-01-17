import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config(
  { ignores: ['dist'] },
  {
      extends: [
          js.configs.recommended,
          ...tseslint.configs.recommended,
          'prettier'
      ],

      files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
      plugins: {
          prettier: prettierPlugin,
          'react-hooks': reactHooks,
          'react-refresh': reactRefresh,
      },

      rules: {
          'prettier/prettier': 'error',
      },
    }
)
