// Based off https://gist.github.com/1natsu172/a65a4b45faed2bd3fa74b24163e4256e
module.exports = {
  extends: [
    // 'eslint-config-alloy/react',
    // 'eslint-config-alloy/typescript',
    // 'plugin:prettier/recommended',
    // 'prettier/@typescript-eslint',
    "plugin:shopify/typescript",
    "plugin:shopify/react",
    "plugin:shopify/jest",
    "plugin:shopify/node",
    "plugin:shopify/polaris",
    "plugin:shopify/prettier",
  ],
  "settings": {
    "react": {
      "version": "16.8.6"
    },
    "import/ignore": ['Types', 'Model'],
    "import/resolver": {
      "typescript": {
        "directory": "./tsconfig.json"
      }
    }
  },
  rules: {
    'babel/object-curly-spacing': [2, "always"],
    'import/no-unused-modules': 'off',
    'react/state-in-constructor': 'off',
    'no-console': 'off',
    // Standard overrides from polaris repo
    "func-style": "off",
    "no-process-env": "off",
    "no-warning-comments": "off",
    "no-negated-condition": "off",
    "consistent-return": "off",
    "match-default-export-name": "off",
    "jsx-use-translation-function": "off",
    "lines-around-comment": [
      "error",
      {
        "beforeBlockComment": false,
        "allowBlockStart": false
      }
    ],
    "babel/no-unused-expressions": "off",
    "import/named": "off",
    "import/no-named-as-default": "off",
    "react/button-has-type": "off",
    "react/no-array-index-key": "off",
    "react/jsx-fragments": ["error", "element"],
    "shopify/jsx-no-complex-expressions": "off",
    "shopify/jsx-prefer-fragment-wrappers": "off",
    "shopify/no-ancestor-directory-import": "error",
    "shopify/react-prefer-private-members": "off",
    "jsx-a11y/label-has-for": [
      2,
      {
        "required": {
          "some": ["nesting", "id"]
        },
        "allowChildren": false
      }
    ],
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/role-supports-aria-props": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
"jsx-a11y/no-noninteractive-element-to-interactive-role": "off",
    // 'react/jsx-indent': 'off',
    // '@typescript-eslint/prefer-interface': 'off',
    // '@typescript-eslint/explicit-member-accessibility': 'off',
    // 'no-use-before-define': 'off',
    // 'react/jsx-indent-props': 'off',
  },
  env: {
    "jest": true
  },
  globals: {},
};

// // Based off https://gist.github.com/1natsu172/a65a4b45faed2bd3fa74b24163e4256e
// module.exports = {
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     project: './tsconfig.json',
//     tsconfigRootDir: '.',
//   },
//   env: {
//     browser: true,
//     'jest/globals': true,
//   },
//   plugins: ['@typescript-eslint', 'react-hooks', 'jest', 'prettier'],
//   extends: [
//     'airbnb',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:import/typescript',
//     'plugin:prettier/recommended',
//     'prettier/@typescript-eslint',
//   ],
//   rules: {
//     /**
//      * @description rules of eslint official
//      */
//     /**
//      * @bug https://github.com/benmosher/eslint-plugin-import/issues/1282
//      * "import/named" temporary disable.
//      */
//     'import/named': 'off',
//     /**
//      * @bug?
//      * "import/export" temporary disable.
//      */
//     'import/export': 'off',
//     'import/prefer-default-export': 'off', // Allow single Named-export
//     'no-unused-expressions': [
//       'warn',
//       {
//         allowShortCircuit: true,
//         allowTernary: true,
//       },
//     ], // https://eslint.org/docs/rules/no-unused-expressions

//     /**
//      * @description rules of @typescript-eslint
//      */
//     '@typescript-eslint/prefer-interface': 'off', // also want to use "type"
//     '@typescript-eslint/explicit-function-return-type': 'off', // annoying to force return type
//     /**
//      * @description rules of eslint-plugin-react
//      */
//     'react/jsx-filename-extension': [
//       'warn',
//       {
//         extensions: ['.jsx', '.tsx'],
//       },
//     ], // also want to use with ".tsx"
//     'react/prop-types': 'off', // Is this incompatible with TS props type?

//     /**
//      * @description rules of eslint-plugin-react-hooks
//      */
//     'react-hooks/rules-of-hooks': 'error',
//     'no-useless-constructor': 'off',
//     '@typescript-eslint/no-useless-constructor': 'error',
//     '@typescript-eslint/explicit-member-accessibility': 'off',
//     '@typescript-eslint/no-empty-interface': 'off',
//     'no-use-before-define': 'off',
//     '@typescript-eslint/no-use-before-define': 'off',
//     'import/no-extraneous-dependencies': [
//       'error',
//       {
//         devDependencies: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx'],
//       },
//     ],
//   },
//   settings: {
//     'import/core-modules': [
//       '@/store',
//       '@/components',
//       '@/api',
//       '@/service',
//       '@/routes',
//     ],
//   },
// };
