<!------------------------------------------------------------------------------
  -
  -    Copyright (c) 2022 - 2025.
  -    Haixing Hu, Qubit Co. Ltd.
  -
  -    All rights reserved.
  -
  ----------------------------------------------------------------------------->
<template>
  <q-item
    v-if="(!item.children) || (item.children.length === 0) || item.children.every((i) => i.hiddenInMenu)"
    class="q-left-menu-item"
    clickable
    ripple
    :to="`${parentPath}/${item.path}`"
  >
    <q-item-section
      v-if="item.icon"
      avatar
    >
      <q-icon :name="item.icon" />
    </q-item-section>
    <q-item-section>{{ item.title }}</q-item-section>
  </q-item>
  <q-expansion-item
    v-else
    :icon="item.icon ?? 'folder'"
    :label="item.title"
  >
    <template v-for="child in item.children" :key="child.name">
      <q-left-menu-item
        v-if="!child.hiddenInMenu"
        :item="child"
        :parent-path="`${parentPath}/${item.path}`"
      />
    </template>
  </q-expansion-item>
</template>
<script>
import { Component, toVue, Prop } from '@qubit-ltd/vue3-class-component';
import { Log, HasLogger } from '@qubit-ltd/logging';

/**
 * 左边导航菜单的子菜单项组件。
 *
 * @author 胡海星
 */
@Component
@HasLogger
class QLeftMenuItem {
  /**
   * 当前的菜单项。
   *
   * @type {object}
   */
  @Prop(Object)
  item;

  /**
   * 父菜单项的路径。
   *
   * @type {string}
   */
  @Prop(String)
  parentPath = '';

  @Log
  created() {
    // TODO
  }
}
export default toVue(QLeftMenuItem);
</script>
