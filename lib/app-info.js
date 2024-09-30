/*******************************************************************************
 *
 *    Copyright (c) 2017 - 2023.
 *    Nanjing Smart Medical Investment Operation Service Co. Ltd.
 *
 *    All rights reserved.
 *
 ******************************************************************************/
import pkg from '../package.json';

/**
 * 当前程序的元信息。
 *
 * @type {object}
 * @author 胡海星
 */
const appInfo = {
  name: pkg.productName,
  code: pkg.name,
  version: pkg.version,
  title: `${pkg.productName}-v${pkg.version}`,
};

export default appInfo;
