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
    ③import Home from './Home'  （前面的Home带不带{}都可）
    export { default as Home } from './Home'
    export { default as Detail } from './Detail'

