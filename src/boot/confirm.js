////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { confirm } from '@qubit-ltd/common-ui';
import { QuasarConfirmImpl } from '@qubit-ltd/common-ui-quasar';
import Logger from '@qubit-ltd/logging';
import { Dialog } from 'quasar';

function init() {
  const logger = Logger.getLogger('boot');
  logger.info('Initialize the global confirm dialog ...');
  confirm.setImpl(new QuasarConfirmImpl(Dialog));
}

export default init;
