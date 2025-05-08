////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { notify } from '@qubit-ltd/common-ui';
import { QuasarNotifyImpl } from '@qubit-ltd/common-ui-quasar';
import Logger from '@qubit-ltd/logging';
import { Notify } from 'quasar';

function init() {
  const logger = Logger.getLogger('boot');
  logger.info('Initialize the global notify ...');
  notify.setImpl(new QuasarNotifyImpl(Notify));
}

export default init;
