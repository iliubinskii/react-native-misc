const customHooks =
  // @sorted
  [
    "useAnimatedProps",
    "useAnimatedReaction",
    "useAnimatedScrollHandler",
    "useAnimatedStyle",
    "useAsyncCallback",
    "useAsyncCallbackBusyState",
    "useAsyncInterval",
    "useAsyncUpdater",
    "useBooleanConfig",
    "useDeferredCallback",
    "useDeferredUpdater",
    "useDelayedCallback",
    "useDelayedUpdater",
    "useDerivedValue",
    "useEnumConfig",
    "useInterval",
    "useResource",
    "useStateConfig",
    "useUpdater"
  ];

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  ignorePatterns: [
    "!.*",
    "/coverage/**",
    "/dist/**",
    "/es/**",
    "/node_modules/**"
  ],
  env: {
    es2022: true
  },
  globals: {
    facades: "readonly",
    reactNativeMisc: "readonly"
  },
  extends: ["union", "union/react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2022,
    project: "tsconfig.json",
    sourceType: "module"
  },
  rules: {
    "@cspell/spellchecker": [
      "warn",
      {
        cspell: {
          words:
            // @sorted
            [
              "asyncs",
              "cjsx",
              "firestore",
              "mjsx",
              "packagejson",
              "pannable",
              "prerendered",
              "sonarjs",
              "swipeable",
              "worklets"
            ]
        }
      }
    ],
    "@typescript-eslint/no-namespace": "off",
    "etc/no-internal": "off",
    "i18n-text/no-en": "off",
    "import/export": "off",
    "import/no-internal-modules": [
      "warn",
      { allow: ["@expo/vector-icons/build/createIconSet"] }
    ],
    "import/no-namespace": "off",
    "no-magic-numbers": [
      "warn",
      { ignore: [-1, 0, 0.5, 1, 2, 10, 12, 24, 60, 100, 1000] }
    ],
    "no-type-assertion/no-type-assertion": "off",
    "react-hooks/exhaustive-deps": [
      "warn",
      { additionalHooks: `^(${customHooks.join("|")})$` }
    ],
    "sonarjs/cognitive-complexity": "off"
  }
};

module.exports = config;
