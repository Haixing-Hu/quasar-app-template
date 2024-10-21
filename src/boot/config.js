////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Logger } from '@haixing_hu/logging';
import { config } from '@haixing_hu/common-app';

/**
 * 配置全局config对象，注入环境变量以及此应用特定的配置参数。
 *
 * @author 胡海星
 */
function init() {
  const logger = Logger.getLogger('boot');
  logger.info('Initialize the configuration...');
  // 注入环境变量
  const env = process.env;
  logger.debug('process.env:', env);
  config.mergeEnv(env);
  config.merge({
    debug: (env.DEBUGGING === true),                              // 是否调试模式
    login_page: 'Login',                                          // 登录页名称
    social_network: 'WECHAT',                                     // 社交网络类型
    app_token_name: 'X-Auth-App-Token',                           // App Token 在HTTP Header中的名称
    access_token_name: 'X-Auth-User-Token',                       // Access Token在HTTP Header中的名称
    access_token_expire_days: 20,                                 // Access Token过期天数
    http_timeout: 30 * 60 * 1000,                                 // HTTP请求超时时间，单位为毫秒，默认值30分钟
    http_header_content_type: 'application/json;charset=UTF-8',   // HTTP请求头的 Content-Type 键值
    http_header_accept: 'application/json;charset=UTF-8',         // HTTP请求头的 Accept 键值
    roll_pulling_period: 5000,                                    // 轮询检查的时间间隔，单位为毫秒，默认值3秒
    permission_acquirement_timeout: 30 * 1000,                    // 获取权限超时时间，单位为毫秒，默认值为30秒
    show_version_click_time: 5,                                   // 在左下角点击几次显示版本信息
    redirect_timeout: 2 * 1000,                                   // 自动跳转延时，单位为毫秒
    auto_return_home_timeout: 1 * 60 * 1000,                      // 评价结束后过多久自动返回首页，单位为毫秒，默认
    send_sms_interval: 60,                                        // 发送验证码的间隔时间，单位
    verify_code_length: 6,                                        // 验证码的长度
  });
  logger.info('After initialization, the configuration is:', config);
}

export default init;
