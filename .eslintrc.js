module.exports = {
  extends: [
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
    // Disabled due strange problems
    'import/no-unused-modules': 'off',
    'react/state-in-constructor': 'off',
    //
    'no-console': 'off',
    'lines-around-comment': 'off',
    "import/named": "off",
  },
  env: {
    "jest": true
  },
  globals: {},
};