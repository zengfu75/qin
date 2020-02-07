const webpack = require('webpack')
const path = require('path')
module.exports = {
  chainWebpack: config => {
    // 其他配置
    // config.entry('main').add('babel-polyfill') // main是入口js文件
    // 其他配置
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          '@v': path.resolve(__dirname, './src/views'),
          '@a': path.resolve(__dirname, './src/assets'),
          '@u': path.resolve(__dirname, './src/utils')
        } // 别名配置
      }
    })
    // eslint-disable-next-line no-unused-labels
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ]
  },
  pluginOptions:{
    "style-resources-loader":{
      preProcessor:'less',
      patterns:[
        path.resolve(__dirname,'./src/static/theme.less')
      ]
    }
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8000,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {//配置跨域
      '/users': {
        target: 'http://10.20.56.126:3000',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,//允许跨域
        // pathRewrite: {
        //     '^/users': ''//请求的时候使用这个api就可以
        // }
      }

    }
  }

}