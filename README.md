# webpack4+react demo

1.init 项目

```
mkdir webpack-react-demo
cd webpack-react-demo
yarn init
```

2.安装 webpack

```
yarn add webpack webpack-cli webpack-dev-server --dev
新建webpack.config.js
module.exports = {
    mode: "development",
    entry: ["./src/index.js"],
    output: {
        // 输出目录
        path: path.join(__dirname, "dist"),
        // 文件名称
        filename: "bundle.js"
    },
    module:{},
    plugins:[],
    devServer:{}
}
```

3.安装 react 及 typescript 并建立目录结构

```
yarn add react react-dom
yarn add typescript ts-loader ---dev
```

4.安装 babel

```
yarn add @babel/core @babel/preset-env --dev
yarn add babel-loader --dev
yarn add @babel/preset-react --dev
```

5.安装 html-webpack-plugin 插件

```
yarn add html-webpack-plugin --dev
```
