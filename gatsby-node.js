/* eslint-disable fp/no-mutation */
/* eslint-disable-next-line */
const path = require('path')

require('source-map-support').install()
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext'
  }
})

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '/components': path.resolve(__dirname, './src/components/'),
        '/layouts': path.resolve(__dirname, './src/layouts/'),
        '/routes': path.resolve(__dirname, './src/routes.ts'),
        '/styles': path.resolve(__dirname, './src/styles/'),
        '/theme': path.resolve(__dirname, './src/theme.ts'),
        '/templates': path.resolve(__dirname, './src/templates/'),
        '/typings': path.resolve(__dirname, './typings/'),
        '/utils': path.resolve(__dirname, './src/utils/')
      }
    }
  })
}

exports.onCreateNode = require('./node/onCreateNode').onCreateNode
exports.createPages = require('./node/createPages').createPages
