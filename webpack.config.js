const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin'); //引入这行

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'boundle.js'
    },
    mode: 'development',
    devServer: {
        open: true,//自动打开浏览器
        port: 3000,//运行端口号
        contentBase: 'src',//指定跟目录
        hot: true,//启用热更新
        openPage: 'index.html'//设置默认启动页面
    },
    plugins: [
        //配置插件的节点
        new webpack.HotModuleReplacementPlugin(),//热更新
        new vueLoaderPlugin(),
        new htmlWebpackPlugin({
            //创建一个内存中生成HTML页面的插件
            //并且把打包的boundle.js自动注入到html页面中
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            //第三方模块匹配规则
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: (loader) => {
                                require('autoprefixer')({ overrideBrowserslist: ['> 0.15% in CN'] })
                            }
                        }
                    }
                ]
            },
            {
                //处理图片路径的loader
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8501,
                        //哈希-图片原名称。图片原后缀
                        name: '[hash:8]-[name].[ext]'
                    }
                }
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use:['url-loader']
                // use: {
                //     loader: 'url-loader',
                //     options: {

                //     }
                // }
            },
            // test:/\.(ttf|eot|woff|woff2|svg)$/,
            // use:['file-loader']//1.把你的资源移动到输出目录2.返回最终引入资源的url
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,//排除这两个里面的JS不编译
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
};