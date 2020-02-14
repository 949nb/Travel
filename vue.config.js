const path = require('path');
const mockData = require('./public/static/mock/index')

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/styles'))
    // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  },
  devServer: {
    port: 9999,
    proxy: {
      '/api': {
        target: 'http://localhost:9999',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/static/mock'
        }
      }
    }
  }
}