////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import Logger from '@qubit-ltd/logging';
import config from '@qubit-ltd/config';
import { alert } from '@qubit-ltd/common-ui';
import QuasarAlertImpl from 'src/utils/quasar-alert-impl';

function init() {
  const logger = Logger.getLogger('boot');
  logger.info('Initialize the global alert dialog ...');
  alert.setImpl(new QuasarAlertImpl());
  if (config.use_debug_dialog) {
    alert.enableDebug();
  } else {
    alert.disableDebug();
  }
}

export default init;
