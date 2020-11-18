import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";


export default {
  input: "./src/js/site.js",
  output: {
    file: "./dist/site.js",
    format: "iife",
    name: "site"
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**"
    }),
    nodeResolve(),
    terser()
  ]
}
