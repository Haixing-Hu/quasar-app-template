////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { loading } from '@qubit-ltd/common-ui';
import { QuasarLoadingImpl } from '@qubit-ltd/common-ui-quasar';
import Logger from '@qubit-ltd/logging';
import { Loading } from 'quasar';

function init() {
  const logger = Logger.getLogger('boot');
  logger.info('Initialize global loading layer ...');
  loading.setImpl(new QuasarLoadingImpl(Loading));
}

export default init;
