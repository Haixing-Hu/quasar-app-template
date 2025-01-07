////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { store } from 'quasar/wrappers';
import { createPinia } from 'pinia';
import { Logger } from '@qubit-ltd/logging';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const logger = Logger.getLogger('store');
  logger.info('Creating the pinia store ...');
  const pinia = createPinia();
  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)
  return pinia;
});
