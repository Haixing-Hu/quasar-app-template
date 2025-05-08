////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { userAuthenticateApi, verifyCodeApi } from '@qubit-ltd/common-api';
import { BasicUserStore } from '@qubit-ltd/common-app';
import config from '@qubit-ltd/config';
import { toStore } from '@qubit-ltd/pinia-decorator';

/**
 * 用户认证登录相关的Store。
 *
 * @author 胡海星
 */
class UserStore extends BasicUserStore {
  constructor() {
    super(userAuthenticateApi, verifyCodeApi, config.get('app_code'));
  }
}

export default toStore('user', UserStore);
