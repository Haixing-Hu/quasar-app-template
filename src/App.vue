<!----------------------------------------------------------------------------->
<!-- -->
<!--    Copyright (c) 2022 - 2024. -->
<!--    Haixing Hu, Qubit Co. Ltd. -->
<!-- -->
<!--    All rights reserved. -->
<!-- -->
<!----------------------------------------------------------------------------->
<template>
  <router-view />
</template>

<script>
import { Component, toVue } from '@qubit-ltd/vue3-class-component';
import { Log, HasLogger } from '@qubit-ltd/logging';
import { loading } from '@qubit-ltd/common-ui';
import config from '@qubit-ltd/config';

@Component
@HasLogger
class App {
  @Log
  created() {
    this.logger.info('正在启动：%s v%s', config.app_name, config.app_version);
    this.logger.info('Debugging Model:', config.debug);
    this.logger.info('Node ENV:', config.node_env);
    if (config.disable_loading) {
      // disable loading
      this.logger.info('Disable the loading');
      loading.disable();
    }
  }
}
export default toVue(App);
</script>
