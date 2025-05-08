<!------------------------------------------------------------------------------
  -
  -    Copyright (c) 2022 - 2025.
  -    Haixing Hu, Qubit Co. Ltd.
  -
  -    All rights reserved.
  -
  ----------------------------------------------------------------------------->
<template>
  <q-breadcrumbs
    class="breadcrumbs-navigator"
    separator="/"
  >
    <q-breadcrumbs-el
      v-for="(crumb, index) in breadcrumbs"
      :key="index"
      :label="crumb.label"
      :to="crumb.to"
      :exact="true"
    />
  </q-breadcrumbs>
</template>
<script>
import { Component, toVue } from '@qubit-ltd/vue3-class-component';
import { HasLogger } from '@qubit-ltd/logging';

/**
 * 面包屑导航组件。
 *
 * @author 胡海星
 */
@Component
@HasLogger
class QBreadcrumbsNavigator {
  /**
   * 获取面包屑导航的数据。
   *
   * @return {object[]}
   *     面包屑导航的数据的数组。
   */
  get breadcrumbs() {
    const matched = this.$route.matched;
    const result = [];
    for (let i = 0; i < matched.length; i++) {
      const record = matched[i];
      const label = this.__getLabel(record);
      const path = record.path;
      // 检查是否与前一个路由记录重复
      if (i > 0) {
        const prevRecord = matched[i - 1];
        const prevLabel = this.__getLabel(prevRecord);
        const prevPath = prevRecord.path;
        // 如果当前路由和前一个路由的路径和标题都相同，则跳过当前项
        if ((label === prevLabel) && (path === prevPath)) {
          continue;
        }
      }
      const to = this.__getTo(record);
      // 添加到面包屑数组
      result.push({ label, to });
    }
    return result;
  }

  __getLabel(record) {
    return record.meta.title || record.title || record.name || '';
  }

  __getTo(record) {
    if (record.path !== '' && (record.components || record.redirect)) {
      return { path: record.path };
    } else {
      return null;
    }
  }
}
export default toVue(QBreadcrumbsNavigator);
</script>
