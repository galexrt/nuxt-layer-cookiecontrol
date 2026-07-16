// @ts-check
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import vueParser from 'vue-eslint-parser';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
    {
        ignores: ['.nuxt/', 'gen/', 'proto/'],
    },
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                ecmaVersion: 'latest',
                extraFileExtensions: ['.vue'],
                parser: tsParser,
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            parser: tsParser,
            sourceType: 'module',
        },
        plugins: {
            '@typescript-eslint': tseslint,
        },
    },
    eslintPluginPrettierRecommended,
    {
        plugins: {
            '@typescript-eslint': tseslint,
        },
        rules: {
            'no-console': 0,
            'require-await': 0,
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
            'vue/no-unused-vars': [
                'warn',
                {
                    ignorePattern: '^_',
                },
            ],
            '@typescript-eslint/unified-signatures': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            'import/consistent-type-specifier-style': 'off',
            'import/no-duplicates': [
                'error',
                {
                    'prefer-inline': true,
                },
            ],
            'vue/no-multiple-template-root': 'off',
        },
    },
    {
        files: ['app/pages/**', 'app/layouts/**'],
        rules: {
            'vue/multi-word-component-names': 'off',
        },
    },
);
