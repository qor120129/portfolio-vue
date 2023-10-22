const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       additionalData:`
  //       @import '@/assets/scss/main';
  //       `
  //     }
  //   }
  // },
  configureWebpack: config => {
    config.module = {
      rules: [
        {
          test: /\.vue$/,
          use: [
            'vue-loader',
          ],
        },
        {
          test: /\.s?css$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                additionalData: '@import "src/assets/scss/main";',

              }
            }
          ],
        },
      ],
    };
  },
  devServer: {
    host: 'localhost',
    port: 8079,
    hot: true
  }
})
