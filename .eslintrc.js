module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint", "jest", "unicorn", "jsx-a11y"],
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:unicorn/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  rules: {
    "unicorn/prevent-abbreviations": 0,
    "react/react-in-jsx-scope": 0,
    "unicorn/filename-case": 0,
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": 0,
    "unicorn/no-null": 0,
    "unicorn/prefer-module": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "max-classes-per-file": 0,
    "@typescript-eslint/restrict-template-expressions": 0,
  },
};
