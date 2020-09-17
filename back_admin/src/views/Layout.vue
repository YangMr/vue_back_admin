<template>
  <div>
    <template>
      <div class="index">
        <el-container class="layout">
          <!-- 头部区域 -->
          <el-header>
            <div class="login">UNI-ADMIN</div>
            <el-menu
              :default-active="navBar.active|numToString"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item
                v-for="(item,index) in navBar.list"
                :key="index"
                :index="index | numToString"
              >{{item.name}}</el-menu-item>
              <!-- <el-submenu index="99">
                <template slot="title">
                  <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                  admin
                </template>
                <el-menu-item index="99-1">修改</el-menu-item>
                <el-menu-item index="99-2">退出</el-menu-item>
              </el-submenu> -->
            </el-menu>
          </el-header>
          <el-container>
            <!-- 侧边栏导航  -->
            <el-aside>
              <el-menu
                :router="true"
                :default-active="subMenuNav.activeIndex | numToString"
                class="el-menu-vertical-demo"
                background-color="#fff"
                text-color="#008080"
                active-text-color="#333"
              >
                <el-menu-item :index="item.path" v-for="(item,index) in subMenuNav.subNav" :key="index">
                  <i class="el-icon-menu"></i>
                  <span slot="title">{{item.name}}</span>
                </el-menu-item>
              </el-menu>
            </el-aside>
            <!-- 主体内容 -->
            <el-main>
              <router-view />
            </el-main>
          </el-container>
        </el-container>
      </div>
    </template>
  </div>
</template>

<script>
import filterData from "../common/mixins/index.js";
export default {
  name: "",
  data() {
    return {
      navBar: {
        active: 0,
        list: [
          {
            name: "首页",
            subMenu: {
              activeIndex: 0,
              subNav: [
                {
                  icon: "",
                  name: "后台首页",
                  path: ""
                },
                {
                  icon: "",
                  name: "相册管理",
                  path: "/image/image"
                },
                {
                  icon: "",
                  name: "商品列表",
                  path: ""
                }
              ]
            }
          },
          {
            name: "商品",
            subMenu: {
              activeIndex: 1,
              subNav: [
                {
                  icon: "",
                  name: "商品列表",
                  path: ""
                },
                {
                  icon: "",
                  name: "分类列表",
                  path: ""
                },
                {
                  icon: "",
                  name: "商品规格",
                  path: ""
                }
              ]
            }
          },
          {
            name: "订单"
          },
          {
            name: "会员"
          },
          {
            name: "设置"
          }
        ]
      }
    };
  },
  mixins: [filterData],
  computed: {
    subMenuNav() {
      return this.navBar.list[this.navBar.active].subMenu;
    }
  },
  methods: {
    handleSelect(index) {
      console.log(index)
      this.navBar.active = index;
    },
    handleOpen(index,data){
      console.log("111")
    },
    handleClose(key,index){
      console.log("222")
    }
  },
  components: {}
};
</script>


<style scoped>
.layout {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}

.el-header {
  display: flex;
  align-items: center;
  font-size: 24px;
  justify-content: space-between;
  background-color: #545c64;
  color: #fff;
  overflow: hidden;
}

.el-aside {
  width: 200px;
  background-color: #d3dce6;
  color: #333;
  overflow: hidden;
}
.el-aside .el-menu {
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  overflow: hidden;
}
</style>

