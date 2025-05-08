<!------------------------------------------------------------------------------
  -
  -    Copyright (c) 2022 - 2025.
  -    Haixing Hu, Qubit Co. Ltd.
  -
  -    All rights reserved.
  -
  ----------------------------------------------------------------------------->
<template>
  <q-layout class="main-layout" view="lHh Lpr lFf">
    <q-header elevated class="float-top">
      <q-top-toolbar
        :user="user"
        :logout="logout"
        @toggle-left-drawer="onTriggerLeftDrawer"
      />
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="210">
      <q-left-menu
        :items="menuItems"
        :roles="roles"
      />
    </q-drawer>
    <q-page-container>
      <q-breadcrumbs-navigator />
      <router-view class="main-page" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { HasLogger, Log } from '@qubit-ltd/logging';
import { Action, State } from '@qubit-ltd/pinia-decorator';
import { Component, toVue } from '@qubit-ltd/vue3-class-component';
import QBreadcrumbsNavigator from 'src/components/QBreadcrumbsNavigator.vue';
import QLeftMenu from 'src/components/QLeftMenu.vue';
import QTopToolbar from 'src/components/QTopToolbar.vue';
import leftMenuItems from 'src/layouts/left-menu.json';
import useUserStore from 'src/stores/user';

@Component({
  components: {
    QTopToolbar,
    QLeftMenu,
    QBreadcrumbsNavigator,
  },
})
@HasLogger
class MainLayout {
  /**
   * 当前登录用户信息。
   */
  @State(useUserStore)
  user;

  /**
   * 当前登录用户的角色名称列表。
   */
  @State(useUserStore)
  roles;

  /**
   * 注销操作。
   */
  @Action(useUserStore)
  logout;

  /**
   * 左边导航菜单的配置。
   *
   * @type {object}
   */
  menuItems = leftMenuItems;

  /**
   * 左边导航菜单是否打开。
   *
   * @type {boolean}
   */
  leftDrawerOpen = true;

  @Log
  created() {
    // TODO
  }

  onTriggerLeftDrawer() {
    this.leftDrawerOpen = !this.leftDrawerOpen;
  }
}
export default toVue(MainLayout);
</script>
<style lang="scss">
@import 'src/css/variables';

.main-layout {
  height: 100vh;

  .q-drawer {
    background-color: #fff;
    //background-image: url('src/assets/images/bg-left-menu.png');
    //background-position: left bottom;
    //background-repeat: no-repeat;
    //background-size: auto;
  }

  .q-page-container {
    background-color: #f0f2f5;
    //background-color: $bg-color-page;
    //background-image: url('src/assets/images/bg-page.png');
    //background-position: bottom;
    //background-repeat: no-repeat;
    //background-size: auto;
    height: 100%;
    display: flex;
    flex-direction: column;

    .breadcrumbs-navigator {
      margin-top: 20px;
      margin-left: 20px;
      font-weight: bold;
    }

    .main-page {
      //min-height: 0 !important;
      //height: 100vh;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
    }
  }
}
</style>
