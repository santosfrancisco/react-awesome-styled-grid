import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import pkg from './package.json'

const globals = { react: 'React', 'styled-components': 'styled', 'prop-types': 'PropTypes' }

export default [{
  input: 'src/index.js',
  output: {
    file: pkg.main,
    format: 'cjs',
    name: pkg.name,
    globals
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      plugins: [['@babel/plugin-transform-runtime', { useESModules: false }], '@babel/plugin-external-helpers']
    })
  ],
  external: [
    ...Object.keys(pkg.peerDependencies || {})
  ]
},
{
  input: 'src/index.js',
  output: {
    file: pkg.module,
    format: 'es',
    name: pkg.name,
    globals
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      plugins: [['@babel/plugin-transform-runtime', { useESModules: true }], '@babel/plugin-external-helpers']
    })
  ],
  external: [
    ...Object.keys(pkg.peerDependencies || {})
  ]
},
{
  input: 'src/index.js',
  output: {
    file: pkg.browser,
    format: 'umd',
    name: pkg.name,
    globals
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    '@babel/plugin-external-helpers',
    uglify()
  ],
  external: [
    ...Object.keys(pkg.peerDependencies || {})
  ]
}]
