module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    "airbnb",
    "react-app",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "flowtype", "import", "jsx-a11y", "import"],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/forbid-prop-types": "off"
  },
  settings: {
    "import/resolver": {
      alias: [["_utils", "./src/utils"]]
    }
  }
};
