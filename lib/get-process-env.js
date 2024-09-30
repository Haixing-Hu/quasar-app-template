/*******************************************************************************
 *
 *    Copyright (c) 2017 - 2023.
 *    Nanjing Smart Medical Investment Operation Service Co. Ltd.
 *
 *    All rights reserved.
 *
 ******************************************************************************/
import dotenv from 'dotenv-flow';

/**
 * 生成需要注入的环境变量信息。
 *
 * 此函数读取 `.env.${process.env.NODE_ENV}`文件中定义的变量，与当前应用的元信息组合后返
 * 回一个新对象，让 quasar 注入到 `process.env` 环境变量中。
 *
 * @param {object} appInfo
 *     当前应用的元信息。
 * @returns {object}
 *     需要注入 `process.env` 的环境变量信息对象。
 * @author 胡海星
 */
function getProcessEnv(appInfo) {
  // 加入当前应用的元信息
  const result = {};
  if (appInfo) {
    for (const [key, value] of Object.entries(appInfo)) {
      const envKey = `APP_${key.toUpperCase()}`;
      result[envKey] = value;
    }
  }
  // 读取 .env.${process.env.NODE_ENV} 文件中定义的变量并注入到当前node进程
  // 的 process.env 中。然后我们将要将其注入到程序运行环境（可能是浏览器）的
  // process.env.XXXX 全局变量中。
  const { parsed } = dotenv.config();
  for (const [key, value] of Object.entries(parsed)) {
    result[key] = value;
  }
  // 修改quasar对process.env.NODE_ENV的定义，改为当前node进程的process.env.NODE_ENV
  result.NODE_ENV = process.env.NODE_ENV;
  result.PROD_MODE = (process.env.NODE_ENV === 'production');
  result.DEV_MODE = (process.env.NODE_ENV === 'development');
  result.STAGE_MODE = (process.env.NODE_ENV === 'stage');
  result.DEBUG = (process.env.NODE_ENV !== 'production') || (process.env.DEBUGGING === 'true');
  result.USE_ANALYZER = (process.env.USE_ANALYZER === 'true');
  console.log('The injected process.env is: ', result);
  return result;
}

export default getProcessEnv;
