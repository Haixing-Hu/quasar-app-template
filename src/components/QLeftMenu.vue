<!------------------------------------------------------------------------------
  -
  -    Copyright (c) 2022 - 2025.
  -    Haixing Hu, Qubit Co. Ltd.
  -
  -    All rights reserved.
  -
  ----------------------------------------------------------------------------->
<template>
  <q-list>
    <q-item-label header>
      <!-- Logo 占位 -->
    </q-item-label>
    <template v-for="item in filteredItems" :key="item.name">
      <q-left-menu-item v-if="!item.hiddenInMenu" :item="item" />
    </template>
  </q-list>
</template>
<script>
import { Component, Prop, toVue } from '@qubit-ltd/vue3-class-component';
import QLeftMenuItem from './QLeftMenuItem.vue';

/**
 * 左边导航菜单组件。
 *
 * @author 胡海星
 */
@Component({
  components: {
    QLeftMenuItem,
  },
})
class QLeftMenu {
  /**
   * 左边导航菜单的配置。
   *
   * @type {object}
   */
  @Prop(Object)
  items;

  /**
   * 当前登录用户的角色名称列表。
   *
   * @type {string[]}
   */
  @Prop(Array)
  roles = [];

  /**
   * 管理员的角色名称。
   *
   * 默认值为 'ADMIN'。
   *
   * @type {string}
   */
  @Prop(String)
  adminRoleName = 'ADMIN';

  /**
   * 根据用户角色过滤后的菜单项
   *
   * @returns {Array}
   */
  get filteredItems() {
    // 从pinia中获取用户角色信息
    const isAdmin = this.roles.includes(this.adminRoleName);
    // 如果是admin，显示所有菜单项
    if (isAdmin) {
      return this.items;
    }
    // 否则，过滤掉需要admin权限的菜单项
    return this.items.filter((item) => {
      // 如果菜单项没有requiresAdmin标记，则显示
      if (!item.requiresAdmin) {
        return true;
      }
      return false;
    }).map((item) => {
      // 如果有子菜单，也需要过滤子菜单
      if (item.children && item.children.length > 0) {
        return {
          ...item,
          children: item.children.filter((child) => !child.requiresAdmin),
        };
      }
      return item;
    });
  }
}

export default toVue(QLeftMenu);
</script>
