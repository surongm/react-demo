(以下均为简洁版，要看复杂版请看前几个)
## antd 
    使用antd
    ①先安装  npm install antd --save-dev
    ②直接使用
         import { Button } from 'antd';
         import 'antd/dist/antd.css';  

## components目录
    index.js  文件中 
    ①export default  只能导出一个组件

    <!-- 这种方式比较容易记住 -->
    ② import Home from './Home'  （前面的Home不能带{}）
    export {
        Home,
        Detail
    }

    <!-- 推荐这种方式 -->
    ③import Header from './Header'  （前面的Home带不带{}都可）
    export { default as Header } from './Header'
    export { default as Content } from './Content'
    export { default as Footer } from './Footer'

## Views目录
    export { default as Home } from './Home'
    export { default as Detail } from './Detail'

## 目录结构
├── public                      // 应用
├── src                         // 源代码目录
│   ├── component               // 组件
│       ├── Content             // 内容
│           ├── index.js        // 内容代码
│       ├── Header              // 头部
│           ├── index.js        // 头部代码
│           ├── header.css      // 头部的样式
│       ├── Footer             // 底部
│           ├── index.js        // 底部代码
│       ├── index.js            // 统一导出各个组件
│   ├── views                   // 页面
│       ├── Home                // 主页 即卡片列表页面
│           ├── home.css        // 主页样式
│           ├── index.js        // 主页代码
│       ├── NotFound            // 404页面
│           ├── 404.jpg         // 404背景图
│           ├── index.js        // 404页面
│       ├── index.js            // 统一导出各个页面
├── App.js                      // 路由
├── index.js                    // 入口文件
├── package-lock.json
├── package.json                // webpack配置
├── README.md                   // help
