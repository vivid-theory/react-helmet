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
      output: {
        format: 'esm',
        sourcemap: true,
        exports: 'named'
      },
      plugins: [
        require('rollup-plugin-replace')({
          'process.env.NODE_ENV': "'development'"
        }),
        require('rollup-plugin-babel')({
          exclude: 'node_modules/**',
          plugins: [
            [
              'istanbul',
              {
                exclude: ['**/node_modules/**', '**/test/**']
              }
            ]
          ]
        }),
        require('rollup-plugin-node-resolve')({
          browser: true
        }),
        require('@rollup/plugin-typescript')(
          {
            tsconfig: './tsconfig.json'
          }
        )
      ]
    },

    karmaTypescriptConfig: {
      compilerOptions: {
        target: 'ES2017',
        lib: ['es2017', 'dom'],
        skipLibCheck: 'true'
      },
      tsconfig: 'tsconfig.json',
      ignore: ['node_modules']
    },

    reporters: ['karma-typescript'],
    browsers: ['ChromeHeadless'],

    singleRun: true
  })
}
