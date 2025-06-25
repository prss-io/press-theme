import { defineConfig, globalIgnores } from "eslint/config";
import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([globalIgnores(["**/node_modules", "**/src/_common/components/ui", "**/build", "**/d.ts"]), {
  extends: compat.extends(
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ),

  plugins: {
    react,
    "@typescript-eslint": typescriptEslint,
    prettier,
  },

  languageOptions: {
    globals: {
      ...globals.browser,
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
    },

    parser: tsParser,
    ecmaVersion: 2018,
    sourceType: "module",

    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },

  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },

  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": 0,
    quotes: ["warn", "double"],
    "keyword-spacing": "warn",
    "space-before-blocks": "warn",
    "no-multi-spaces": "warn",
    "no-unused-vars": "warn",
    "indent": ["error", 2],
    "comma-spacing": ["warn", {
      before: false,
      after: true,
    }],
  },
}]);