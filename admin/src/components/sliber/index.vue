<template>
  <div>
    <!--    没有子菜单-->
    <template v-if="!item.children||item.children.length===0">
      <el-menu-item :index="item.path" :class="{'submenu-title-noDropdown':!isNest}">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </template>
    <el-submenu v-else ref="subMenu" :index="item.menuId" popper-append-to-body>
      <template slot="title">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.menuId"
        :is-nest="true"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>

</style>
