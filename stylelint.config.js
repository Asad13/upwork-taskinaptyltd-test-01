/** @type {import('stylelint').Config} */
const stylelintConfig = {
  extends: ['stylelint-config-standard'],
  rules: {
    'declaration-property-value-no-unknown': null,
    'alpha-value-notation': null,
    'color-function-notation': null,
    'color-hex-length': null,
  },
  overrides: [
    {
      files: ['**/*.module.css'],
      rules: {
        'selector-class-pattern': [
          '^(?:[a-z][a-zA-Z0-9]*|([a-z][a-z0-9]*)(-[a-z0-9]+)*)$',
          {
            message: 'Class names in module css should be either in "Lower Camel Case" or "Kebab Case"',
          },
        ],
      },
    },
  ],
};

export default stylelintConfig;
