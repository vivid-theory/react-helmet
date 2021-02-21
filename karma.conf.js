const babel = require('@rollup/plugin-babel').babel

module.exports = function (config) {
  config.set({

    frameworks: ['mocha', 'karma-typescript'],

    files: [
      { pattern: 'src/**/*.+(ts|tsx)' }
    ],

    preprocessors: {
      '**/*.+(ts|tsx)': ['karma-typescript', 'rollup']
    },

    rollupPreprocessor: {
      input: 'src/index.tsx',
      output: {
        dir: './dist',
        format: 'esm',
        sourcemap: true,
        exports: 'named',
        preserveModulesRoot: './src',
        preserveModules: true
      },
      plugins: [
        require('@rollup/plugin-typescript')(
          {
            tsconfig: './tsconfig.json'
          }
        ),
        // require('rollup-plugin-replace')({
        //   'process.env.NODE_ENV': "'development'"
        // }),
        babel({
          exclude: 'node_modules/**',
          babelHelpers: 'bundled'
        })
        // require('rollup-plugin-node-resolve')({
        //   browser: true
        // })

      ]
    },

    karmaTypescriptConfig: {
      compilerOptions: {
        target: 'ES2017',
        module: 'esnext',
        jsx: 'react',
        lib: ['es6', 'dom', 'es2016', 'es2017'],
        declaration: true,
        declarationMap: true,
        sourceMap: true,
        outDir: './dist',
        rootDir: './src',
        baseUrl: './dist',
        removeComments: true,
        moduleResolution: 'node',
        esModuleInterop: true,
        forceConsistentCasingInFileNames: true
      },
      tsconfig: 'tsconfig.json',
      ignore: ['node_modules']
    },

    reporters: ['karma-typescript'],
    browsers: ['ChromeHeadless'],

    singleRun: true
  })
}
