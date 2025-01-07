////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Logger } from '@qubit-ltd/logging';
import DEFAULT_AVATAR_FEMALE from 'assets/images/default_avatar_female.png';
import DEFAULT_AVATAR_MALE from 'assets/images/default_avatar_male.png';

const logger = Logger.getLogger('user-store');

export function ensureUserExist(store) {
  if (!store.user) {
    store.user = {
      id: null,
      username: '',
      nickname: '',
      avatar: '',
      name: '',
      gender: '',
      mobile: '',
    };
  }
  return store.user;
}

export function refreshAvatar(store) {
  const user = ensureUserExist(store);
  if (!user.avatar && user.gender) {
    switch (user.gender) {
      case 'MALE':
        this.setAvatar(DEFAULT_AVATAR_MALE);
        break;
      case 'FEMALE':
        this.setAvatar(DEFAULT_AVATAR_FEMALE);
        break;
      default:
        this.setAvatar('');
        break;
    }
  }
}

export function mergeUserInfo(store, info, authStorage) {
  logger.info('Merge user info:', info);
  const user = ensureUserExist(store);
  if (!user.username && info.username) {
    user.username = info.username;
  }
  if (!user.name && info.name) {
    user.name = info.name;
  }
  if (!user.nickname && info.nickname) {
    user.nickname = info.nickname;
  }
  if (!user.gender && info.gender) {
    user.gender = info.gender;
  }
  if (!user.avatar && info.avatar) {
    user.avatar = info.avatar;
  }
  if (!user.mobile && info.mobile) {
    user.mobile = info.mobile;
  }
  refreshAvatar(this);
  if (this.saveLogin) {
    authStorage.storeUserInfo(user);
  }
  logger.debug('After merging: user = %s', user);
}

/**
 * 从本地存储中获取保存的用户登录信息。
 *
 * @returns {Promise<boolean>}
 *     如果成功获取用户的登录信息，则保存userId和token并返回`true`；否则返回`false`。
 */
export async function loadTokenFromAuthStorage(store, authStorage) {
  const user = authStorage.loadUserInfo();
  if (user?.username) {       // 如果有用户信息，则保存用户信息，以便于后继登录自动填写用户名和手机号码
    logger.info('Found user information in the local storage:', user);
    store.setUserInfo(user);
  }
  const password = authStorage.loadPassword();
  if (password) {   // 如果有密码，则保存密码，以便于后继登录自动填写密码
    logger.info('Found password in the local storage:', password);
    store.setPassword(password);
  }
  const saveLogin = authStorage.loadSaveLogin();
  if (saveLogin) {  // 如果有保存登录信息，则保存保存登录信息标志
    logger.info('Found save login information in the local storage:', saveLogin);
    store.setSaveLogin(saveLogin);
  }
  const token = authStorage.loadToken();
  if (user?.id && token?.value) {
    logger.info('Successfully load access token from the local storage:', token);
    if (await this.__isTokenValid(user.id, token.value)) {
      store.setUserId(user.id);
      store.setToken(token);
      return true;
    } else {
      logger.info('The access token is invalid or expired, remove it:', token);
      authStorage.removeLoginResponse();
      return false;
    }
  } else {
    logger.error('No access token found in local storage.');
    return false;
  }
}
