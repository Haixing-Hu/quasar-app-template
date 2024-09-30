////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Xing Lin Digital Tech Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { toStore } from '@haixing_hu/pinia-decorator';
import { BasicUserStore } from '@haixing_hu/common-app';

// FIXME: Replace the following code with the real API.
const userAuthorizationApi = {};

/**
 * 用户认证登录相关的Store。
 *
 * @author 胡海星
 */
class UserStore extends BasicUserStore {
  constructor() {
    super(userAuthorizationApi);
  }
}

export default toStore('user', UserStore);
