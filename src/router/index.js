////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Qubit Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { route } from 'quasar/wrappers';
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import { Logger } from '@haixing_hu/logging';
import routes from './routes';

const logger = Logger.getLogger('vue-router');

/**
 * The router singleton instance.
 *
 * @type {object}
 */
let router = null;

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */
export default route((/* { store, ssrContext } */) => {
  if (router) {
    // returns the existing router
    return router;
  }
  // create a new router
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);
  router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });
  router.lastRoute = null;      // used to remember the last location
  router.beforeEach((to, from) => {
    logger.debug('Router.beforeEach: from = %s, to = %s', from?.name, to?.name);
    router.lastRoute = from;    // remember the last location
    return true;
  });
  router.afterEach((to, from, next) => {
    logger.debug('Router.afterEach: from = %s, to = %s', from?.name, to?.name);
    if (typeof next === 'function') {
      next();
    }
  });
  return router;
});
