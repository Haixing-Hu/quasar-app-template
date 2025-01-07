////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import Logger from '@qubit-ltd/logging';
import { http } from '@qubit-ltd/common-app';
import useUserStore from 'src/stores/user';
import getRouter from 'src/router';

function init() {
  const logger = Logger.getLogger('boot');
  logger.info('Initialize the global axios wrapper ...');
  http.getAccessToken = function getAccessToken() {
    const store = useUserStore();
    return store.token;
  };
  http.resetAccessToken = function resetAccessToken() {
    const store = useUserStore();
    store.resetToken();
  };
  http.getRouter = getRouter;
}

export default init;
