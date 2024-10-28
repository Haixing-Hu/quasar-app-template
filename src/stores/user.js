////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import config from '@haixing_hu/config';
import { toStore } from '@haixing_hu/pinia-decorator';
import { BasicUserStore } from '@haixing_hu/common-app';

// FIXME: Replace the following code with the actual API object.
const userAuthorizationApi = {};

/**
 * 用户认证登录相关的Store。
 *
 * @author 胡海星
 */
class UserStore extends BasicUserStore {
  constructor() {
    super(userAuthorizationApi, config.get('app_code'));
  }
}

export default toStore('user', UserStore);
