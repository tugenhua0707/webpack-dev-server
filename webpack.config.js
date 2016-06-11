
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require("webpack");

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);

var SRC_PATH = path.resolve(ROOT_PATH, 'src');

var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {

  entry: {
     "a": SRC_PATH + "/js/a.js",
     "index": SRC_PATH + "/js/index.js"
  },
 
  output: {
    filename: "/js/[name].js",
    path: BUILD_PATH
  },
  module: {
    loaders: [
      //.css 文件使用 style-loader 和 css-loader 来处理
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
            'css?sourceMap!' +
            'less?sourceMap'
        )
      },

      {
        test: /\.js$/, 
        loader: 'babel'
      },
      {
        test: /.(png|jpg)$/, 
        loader: 'url?limit=8192&name=images/[hash:8].[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    // 内联css提取到单独的styles的css
    new ExtractTextPlugin("/css/index.css"),
    new HtmlwebpackPlugin({
      title: 'Hello World app',
      filename: 'html/index.html',
      template: 'src/html/index.html',
      inject: true,
      hash: true
    }),
    new webpack.optimize.UglifyJsPlugin({    //压缩代码
       compress: {
           warnings: false
       },
       except: ['$super', '$', 'exports', 'require']    //排除关键字
    })
  ]
};
/*
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);

var SRC_PATH = path.resolve(ROOT_PATH, 'src');

var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  
  entry: {
    'index' : SRC_PATH + "/js/index.js"
  },
  //输出的文件名 合并以后的js会命名为index.js
  output: {
    path: BUILD_PATH + '/js/',
    filename: '[name].js'
  },
  watch: true,
  
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    
    new HtmlwebpackPlugin({
      title: 'Hello World app',
      minify:{ //压缩HTML文件
        //removeComments:true,    //移除HTML中的注释
        //collapseWhitespace:true    //删除空白符与换行符
      }
    })
    
    new webpack.optimize.UglifyJsPlugin({    //压缩代码
       compress: {
           warnings: false
       },
       except: ['$super', '$', 'exports', 'require']    //排除关键字
    })
  ]
};*/
 
