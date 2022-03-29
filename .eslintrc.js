module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: "@babel/eslint-parser",
  plugins: ["prettier", "react", "react-hooks", "filenames"],
  extends: ["plugin:react/recommended", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 99,
        parser: "flow",
      },
    ],
    "no-undef": [2],
    "no-unused-vars": [2, { vars: "all", args: "after-used", ignoreRestSiblings: false }],
    "react/prop-types": 2,
    "react/no-multi-comp": [2, { ignoreStateless: false }],
    "react/no-deprecated": [2],
    "react/no-typos": [2],
    "react/sort-prop-types": [2],
    "react/jsx-sort-props": [2],
    "react/jsx-no-bind": [2],
    "react-hooks/rules-of-hooks": [2],
    "react-hooks/exhaustive-deps": [2],
    "filenames/match-regex": [0],
    "filenames/match-exported": [2, "pascal"],
    "filenames/no-index": [0],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      pragma: "React",
      version: "^17.0.0",
    },
  },
};
