module.exports = {
  "extends": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["react"],
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "semi": ["error", "always", { "omitLastInOneLineBlock": true }],
    "react/no-arrow-function-lifecycle": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-danger-with-children": "error",
    "react/no-did-update-set-state": "error",
    "react/no-render-return-value": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-unescaped-entities": "error",
    "react/jsx-no-target-blank": "error",
    "react/no-unknown-property": "error",
    "react/no-array-index-key": "error",
    "react/no-children-prop": "error",
    "react/no-find-dom-node": "error",
    "react/jsx-uses-react": "error",
    "react/hook-use-state": "error",
    "react/no-string-refs": "error",
    "react/jsx-uses-vars": "error",
    "react/no-deprecated": "error",
    "react/no-is-mounted": "error",
    "react/jsx-no-undef": "error",
    "react/display-name": "error",
    "react/jsx-key": "error",
    "react/require-render-return": "warn",
    "react/button-has-type": "warn",
    "react/no-multi-comp": "warn",
  }
};
