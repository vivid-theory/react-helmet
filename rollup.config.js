import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from "./package.json";

export default {
    input: "src/Helmet.tsx",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: "esm",
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        typescript(),
        babel({
            exclude: "node_modules/**",
            babelHelpers: "bundled",
        }),
    ],
};
