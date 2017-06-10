let path = require("path");
let htmlWebpackPlugin = require("html-webpack-plugin");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let extract = new ExtractTextPlugin("build.css");


module.exports = {
    entry:{
        vendor: ['react','react-dom','redux','react-redux','react-router-dom'],
        index: './app/index.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve('dist')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                /*use: ['style-loader','css-loader','less-loader']*/
                use: extract.extract(['css-loader',{
                    loader: 'postcss-loader',
                    options:{
                        plugins:[
                            require("autoprefixer") // 添加 css 前缀
                        ]
                    }
                },'less-loader'])
            },
            {
                test: /\.(gif|jpg|png)$/,
                use: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        extract, // 注入抽离的插件
        new htmlWebpackPlugin({
            template: './app/index.html'
        })
    ],
    devtool:'source-map', //错误时可以提示源码错误，不会光显示bundle.js错误
    devServer: {
        proxy:{
            '/api':'http://localhost:3000'
        }
    }

};









