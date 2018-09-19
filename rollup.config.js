import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

const globals = {react: 'React', 'styled-components': 'styled', 'prop-types': 'PropTypes'}
const external = ['styled-components', 'prop-types', 'react']
const name = 'react-awesome-styled-grid'

export default [{
  input: 'src/index.js',
  output: {
    file: 'lib/react-awesome-styled-grid.cjs.js',
    format: 'cjs',
    name,
    globals
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      plugins: [['@babel/plugin-transform-runtime', { useESModules: false }], '@babel/plugin-external-helpers']
    })
  ],
  external
},
{
  input: 'src/index.js',
  output: {
    file: 'lib/react-awesome-styled-grid.es.js',
    format: 'es',
    name,
    globals
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      plugins: [['@babel/plugin-transform-runtime', { useESModules: true }], '@babel/plugin-external-helpers']
    }),
  ],
  external
},
{
  input: 'src/index.js',
  output: {
    file: 'lib/react-awesome-styled-grid.js',
    format: 'umd',
    name,
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
  external
}]
