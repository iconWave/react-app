
> 这是一个react 分享项目，我会持续更新奥！
> 注意本项目包管理工具为yarn


## 安装步骤：

```
 git clone

 cd react-app

 yarn install

 yarn run server  // 打开后台node后台服务器

 yarn  start      // 启动 本地服务器 weback-dev-server
```



## react 技术站
- react react-router4 redux react-redux fetch

## 初始化 package.json
```
$ yarn init -y
```
## webpack

```
$ yarn add webpack webpack-dev-server --dev
```

## babel

```
$ yarn add babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader less less-loader html-webpack-plugin --dev
```

```
$ yarn add react redux react-redux react-dom react-router-dom
```

## fetch
```
$ yarn add es6-promise whatwg-fetch --dev
```
## express

```
$ yarn add express
```

## scripts
```
"start","webpack-dev-server --port 5000 --open --progress --colors",
"build","webpack -p"
```
## 目录结构
- components 组件 木偶组件
- container 页面组件，或者自己的 subpage 目录下
  - Home
    - subpage 智能组件
    - index.js
- index.js 用来控制显示哪一个页面

- store onlyOne
- action 用户发布动作
- reducer 定义规则
- action-types action 的名字














