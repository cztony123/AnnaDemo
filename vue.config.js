const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// module.exports={
//   publicPath:'/',
//   outputDir:"dist",
//   assertsDir:"assets",
//   lintOnSave:"false",
//   devServer:{
//     open:false,
//     host:"0.0.0.0",
//     port:"8080",
//     Proxy:{
//       "/proxy":{
//         target:"http://vueshop.glbuys.com/api",
//         changeOrigin:true,
//         pathRewrite:{
//           '^/proxy':""
//         }
//       }
//     }
//   }
// }