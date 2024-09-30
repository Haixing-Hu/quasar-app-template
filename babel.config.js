////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2017 - 2024.
//    Nanjing Smart Medical Investment Operation Service Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

function babelInit(api) {
  api.cache(true);
  const isTest = (process.env.NODE_ENV === 'test');
  return {
    presets: [
      ['@babel/preset-env', {
        // 'targets': {
        //   chrome: '83',
        // },
        'useBuiltIns': 'entry', // 设置为entry时，它会根据你指定的浏览器目标环境来重写你的入口文件中的import "core-js"和import "regenerator-runtime/runtime"语句，这样就可以自动引入polyfills。
        // 'useBuiltIns': 'usage', // 设为"usage"意味着Babel会根据你的代码使用情况自动包含必要的polyfills。这样可以确保你不会引入不必要的polyfills，减少最终包的大小。
        'corejs': '3',
        'modules': (isTest ? 'auto' : false),
      }],
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      ['@babel/plugin-proposal-decorators', { 'version': '2023-05' }],
      'babel-plugin-transform-object-hasown',
    ],
  };
}

module.exports = babelInit;
