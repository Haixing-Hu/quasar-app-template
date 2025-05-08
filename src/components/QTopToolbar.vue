<!------------------------------------------------------------------------------
  -
  -    Copyright (c) 2022 - 2025.
  -    Haixing Hu, Qubit Co. Ltd.
  -
  -    All rights reserved.
  -
  ----------------------------------------------------------------------------->
<template>
  <q-toolbar class="top-toolbar">
    <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click="onToggleLeftDrawerClicked"
    />
    <q-toolbar-title>
      {{ appName }} v{{ appVersion }}
    </q-toolbar-title>
    <div>
      {{ user.username }}
      <q-btn round dense flat color="white" @click="onLogoutClicked()">退出
      </q-btn>
    </div>

  </q-toolbar>
</template>
<script>
import config from '@qubit-ltd/config';
import { HasLogger, Log } from '@qubit-ltd/logging';
import { Component, Prop, toVue } from '@qubit-ltd/vue3-class-component';

/**
 * 顶部工具栏组件。
 *
 * @author 胡海星
 */
@Component({
  emits: ['toggle-left-drawer'],
})
@HasLogger
class QTopToolbar {
  /**
   * 当前用户的信息。
   *
   * @type {object}
   */
  @Prop(Object)
  user;

  /**
   * 注销操作的函数，此函数必须是个异步函数，且返回一个`Promise`。
   *
   * @type {function}
   */
  @Prop(Function)
  logout;

  /**
   * 登录页面的路径。
   *
   * 默认值为`/login`。
   *
   * @type {string}
   */
  @Prop
  loginPagePath = '/login';

  /**
   * 应用程序的名称。
   *
   * @type {string}
   */
  appName = config.get('app_name');

  /**
   * 应用程序的版本。
   *
   * @type {string}
   */
  appVersion = config.get('app_version');

  @Log
  created() {
    // TODO
  }

  onToggleLeftDrawerClicked() {
    this.$emit('toggle-left-drawer');
  }

  onLogoutClicked() {
    this.logout().then(() => {
      this.$router.push(this.loginPagePath);
    });
  }
}
export default toVue(QTopToolbar);
</script>
