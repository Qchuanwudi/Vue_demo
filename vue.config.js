const path = require('path')
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 37.5 //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
})

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  runtimeCompiler: true, // 运行时包含编译器的版本
  lintOnSave: false, // 关闭ESLint编译
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'components': resolve('src/components'),
      }
    },
  },
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

}