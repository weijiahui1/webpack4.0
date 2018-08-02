# webpack4.0
webpack4.0
## 在项目下创建一个webpack.config.js(默认，可修改)文件来配置webpack

module.exports = {
    entry: '',               // 入口文件
    output: {},              // 出口文件
    module: {},              // 处理对应模块
    plugins: [],             // 对应的插件
    devServer: {},           // 开发服务器配置
    mode: 'development'      // 模式配置
}
以上就是webpack的正常配置模块

★ 启动devServer需要安装一下webpack-dev-server
npm install --save-dev webpack-dev-server
按照项目的结构，我们就从0开始去写一下配置吧
