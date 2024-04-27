import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import pkg from "./package.json" assert { type: "json" };

const globals = {
  react: "React",
  "styled-components": "styled",
  "react/jsx-runtime": "jsxRuntime"
};

export default [
  {
    input: "lib/index.ts",
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      name: pkg.name,
      interop: "compat",
      globals
    },
    plugins: [
      peerDepsExternal(),
      typescript({
        tsconfig: "tsconfig.build.json"
      }),
      resolve()
    ],
    external: [...Object.keys(pkg.peerDependencies || {})]
  },
  {
    input: "lib/index.ts",
    output: {
      file: pkg.module,
      format: "es",
      sourcemap: true,
      name: pkg.name,
      interop: "compat",
      globals
    },
    plugins: [
      peerDepsExternal(),
      typescript({
        tsconfig: "tsconfig.build.json"
      }),
      resolve()
    ],
    external: [...Object.keys(pkg.peerDependencies || {})]
  },
  {
    input: "lib/index.ts",
    output: {
      file: pkg.browser,
      format: "umd",
      sourcemap: true,
      name: pkg.name,
      interop: "compat",
      globals
    },
    plugins: [
      peerDepsExternal(),
      typescript({
        tsconfig: "tsconfig.build.json"
      }),
      resolve({ browser: true }),
      terser()
    ],
    external: [...Object.keys(pkg.peerDependencies || {})]
  }
];
