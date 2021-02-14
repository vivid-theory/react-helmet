import { babel } from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default {
  input: 'src/index.tsx',
  output: [
    {
      dir: './dist',
      format: 'esm',
      sourcemap: true,
      exports: 'named',
      preserveModulesRoot: './src',
      preserveModules: true
    }
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json'
    }),
    peerDepsExternal(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    })
  ]
}
