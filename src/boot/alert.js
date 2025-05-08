////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { alert } from '@qubit-ltd/common-ui';
import { QuasarAlertImpl } from '@qubit-ltd/common-ui-quasar';
import config from '@qubit-ltd/config';
import Logger from '@qubit-ltd/logging';
import { Dialog } from 'quasar';

function init() {
  const logger = Logger.getLogger('boot');
  logger.info('Initialize the global alert dialog ...');
  alert.setImpl(new QuasarAlertImpl(Dialog));
  if (config.use_debug_dialog) {
    alert.enableDebug();
  } else {
    alert.disableDebug();
  }
}

export default init;
