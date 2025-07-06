import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginNext from "@next/eslint-plugin-next";
import pluginA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: [".next/**", "node_modules/**"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2024,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    plugins: {
      "react-hooks": pluginReactHooks,
      "@next/next": pluginNext,
      "jsx-a11y": pluginA11y,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginNext.configs.recommended.rules,
      ...pluginA11y.configs.recommended.rules,

      // TypeScript関連のルール調整
      "@typescript-eslint/no-explicit-any": "warn", // エラーから警告に変更
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // React関連のルール調整
      "react/prop-types": "off", // TypeScriptを使用しているため無効化
      "react/no-unknown-property": [
        "error",
        {
          ignore: ["cmdk-input-wrapper", "cmdk-*"], // カスタムプロパティを許可
        },
      ],

      // アクセシビリティ関連のルール調整
      "jsx-a11y/heading-has-content": [
        "warn",
        {
          components: ["Heading", "h1", "h2", "h3", "h4", "h5", "h6"],
          allowRef: true,
        },
      ],
      "jsx-a11y/anchor-has-content": [
        "warn",
        {
          components: ["Link", "a"],
          allowRef: true,
        },
      ],
      "jsx-a11y/anchor-is-valid": [
        "warn",
        {
          components: ["Link"],
          specialLink: ["hrefLeft", "hrefRight"],
          aspects: ["invalidHref", "preferButton"],
        },
      ],
      "jsx-a11y/label-has-associated-control": [
        "warn",
        {
          required: {
            some: ["nesting", "id"],
          },
          allowChildren: true,
          controlComponents: ["Input", "Select", "Textarea"],
        },
      ],

      // React Hooks関連のルール調整
      "react-hooks/rules-of-hooks": "warn", // エラーから警告に変更
      "react-hooks/exhaustive-deps": "warn", // エラーから警告に変更

      // Next.js関連のルール調整
      "@next/next/no-img-element": "warn", // Next.js Imageコンポーネントの推奨
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
