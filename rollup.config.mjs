import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import pkg from "./package.json" assert { type: "json" };

export default [
  {
    input: "lib/index.ts",
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      name: pkg.name
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
      name: pkg.name
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
      name: pkg.name
    },
    plugins: [
      peerDepsExternal(),
      typescript({
        tsconfig: "tsconfig.build.json"
      }),
      resolve(),
      terser()
    ],
    external: [...Object.keys(pkg.peerDependencies || {})]
  },
  {
    input: "./types/index.d.ts",
    output: [
      {
        file: "dist/react-awesome-styled-grid.d.ts",
        format: "esm"
      }
    ],
    plugins: [dts()]
  }
];
