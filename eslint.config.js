import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
	{ ignores: ['dist'] },
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			...js.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		},
	},
	{
		env: {
			browser: true,
			es2021: true,
		},
		extends: ['eslint:recommended', 'plugin:@eslint/js/recommended', 'plugin:prettier/recommended', 'plugin:html/recommended'],
		plugins: ['prettier', 'html'],
		overrides: [
			{
				files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
				languageOptions: {
					globals: {
						window: 'readonly',
						document: 'readonly',
						navigator: 'readonly',
					},
				},
				rules: {
					'prettier/prettier': [
						'warn',
						{
							endOfLine: 'auto',
						},
					],
				},
			},
		],
		rules: {},
	},
];
