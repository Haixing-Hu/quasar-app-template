////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Logger } from '@haixing_hu/logging';
import { loading } from '@haixing_hu/common-ui';
import QuasarLoadingImpl from 'src/utils/quasar-loading-impl';

function init() {
  const logger = Logger.getLogger('boot');
  logger.info('Initialize global loading layer ...');
  loading.setImpl(new QuasarLoadingImpl());
}

export default init;
