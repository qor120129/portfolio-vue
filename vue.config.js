const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig ({
  transpileDependencies: true,
  lintOnSave : false,
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
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                  'babel-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
            }
        ]
    };
  }
})
