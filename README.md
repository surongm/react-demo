## antd 

antd官网  https://ant-design.gitee.io/docs/react/introduce-cn

第一步  先安装antd  (一定要记得 哭了！！！)
cnpm install antd --save-dev

使用antd  高级配置
   ①安装这两个 react-app-rewired customize-cra
     cnpm install react-app-rewired customize-cra --save-dev
   ②修改package.json中的"scripts"中的"start""bulid""test"  (注意"eject"不用修改)
     react-scripts  改为 react-app-rewired
   ③根目录下新建 config-overrides.js 文件
    a.(这样子的话需要自己写很多配置代码，建议b方式)
    （请直接用方式b）
        module.exports = function override(config, env) {
            // do stuff with the webpack config...
            return config;
            };
            
    b.安装 babel-plugin-import
      cnpm install babel-plugin-import --save-dev

    const { override, fixBabelImports } = require('customize-cra');
      module.exports = override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
        }),
      );

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

