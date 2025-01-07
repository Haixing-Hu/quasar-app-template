////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import Logger from '@qubit-ltd/logging';

/**
 * 根据运行环境，配置日志级别。
 *
 * @author 胡海星
 */
function init() {
  // 根据运行环境，配置日志级别。
  const logger = Logger.getLogger('boot');
  const level = (process.env.DEBUG ? 'DEBUG' : 'INFO');
  logger.info('Setting the default logging level to:', level);
  Logger.setDefaultLevel(level);
  Logger.resetAllLevels();
  // 设置特定的日志记录器的日志级别
  Logger.setLoggerLevel('http', 'INFO');
}

export default init;
