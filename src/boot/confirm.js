////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import Logger from '@qubit-ltd/logging';
import { confirm } from '@qubit-ltd/common-ui';
import QuasarConfirmImpl from 'src/utils/quasar-confirm-impl';

function init() {
  const logger = Logger.getLogger('boot');
  logger.info('Initialize the global confirm dialog ...');
  confirm.setImpl(new QuasarConfirmImpl());
}

export default init;
