import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";

const pkg = require("./package.json");

export default {
  input: "index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    commonjs(),
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/env", "@babel/preset-react"],
    }),
  ],
  external: ["react", "prop-types"],
};
