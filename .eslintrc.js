module.exports = {
  extends: ['react-app'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        // Disabled to make codegen easier as some things were generated by codegen
        // but unused, e.g. module has unused parts which in future can be used
        // by view codegen
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
