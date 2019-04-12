<template>
     <el-menu
      default-active="2"
     class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>表单</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <router-link to="/editTable">可编辑表格</router-link></el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/inputClean">输入框可删除内容</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>
<script>
/* eslint-disable */
export default {
    name:"sidebar",
    methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

