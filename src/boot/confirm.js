////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import Logger from '@haixing_hu/logging';
import { confirm } from '@haixing_hu/common-ui';
import QuasarConfirmImpl from 'src/utils/quasar-confirm-impl';

function init() {
  const logger = Logger.getLogger('boot');
  logger.info('Initialize the global confirm dialog ...');
  confirm.setImpl(new QuasarConfirmImpl());
}

export default init;
