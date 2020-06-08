<template>
  <el-container class="container-home">
    <el-aside class="my-aside" width="200px">
        <el-menu
          default-active="/"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
          <el-menu-item index="/work">
            <i class="el-icon-document"></i>
            <span slot="title">工作经验</span>
          </el-menu-item>
          <el-menu-item index="/program">
            <i class="el-icon-setting"></i>
            <span slot="title">项目经验</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
    <el-container>
      <el-header class="my-header">个人简历</el-header>
      <el-main>
        <!-- 路由显示的部分 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
  .container-home {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    // background-color: brown;
    .my-header {
      height: 60px;
      line-height: 60px;
      border-bottom: 2px solid #ccc;
      text-align: center;
    }
    .my-aside {
      height:100%;
      background-color: #545c64;
      .el-menu {
        border-right: none;
      }
    }
  }
</style>
