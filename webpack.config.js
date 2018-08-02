const path = require('path'); //引入我们的node模块里的path
// 插件都是一个类，所以我们命名的时候尽量用大写开头
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js',
        './src/login.js',
        './src/util.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:4].js'
    },
    plugins: [
        // 通过new一下这个类来使用插件
        new HtmlWebpackPlugin({ //将模板的头部和尾部添加css和js模板,dist 目录发布到服务器上，项目包。可以直接上线
            file: 'index.html', //打造单页面运用 最后运行的不是这个
            template: 'src/index.html', //vue-cli放在跟目录下
            hash: true,
        })
    ],
    module: {
        rules: [{
            test: /\.js$/, //es6 => es5 
            include: /src/,
            exclude: /node_modules/, //不匹配选项（优先级高于test和include）
            use: 'babel-loader'
        }, ]
    }
}