////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import config from '@qubit-ltd/config';

/**
 * 开发环境下动态载入vconsole，生产环境打包不会加载这个依赖
 *
 * @author 胡海星
 */
function init() {
  if (config.use_vconsole) {
    // 开发环境下动态载入vconsole，生产环境打包不会加载这个依赖
    const VConsole = require('vconsole');
    new VConsole();
  }
}

export default init;
