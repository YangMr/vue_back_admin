<template>
  <div class="index">
    <el-container class="layout">
      <!-- 头部区域 -->
      <el-header>
        <div class="login">UNI-ADMIN</div>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item
            v-for="(item,index) in navBar"
            :key="index"
            :index="item.activeIndex"
          >{{item.name}}</el-menu-item>
          <el-submenu index="99">
            <template slot="title">
              <el-avatar
                shape="circle"
                size="small"
                src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
              ></el-avatar>sumarry
            </template>
            <el-menu-item index="2-1">修改密码</el-menu-item>
            <el-menu-item index="2-2">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-container>
        <!-- 侧边栏导航  -->
        <el-aside>
          <el-menu
            :default-active="subActiveIndex"
            class="el-menu-vertical-demo"
            background-color="#fff"
            text-color="#008080"
            active-text-color="#333"
          >
            <el-menu-item index="1" v-for="(item,index) in subNav" :key="index">
              <i class="el-icon-menu"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 主体内容 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      activeIndex: "1",
      subActiveIndex : "1",
      subNavBar : [],
      navBar: [
        {
          activeIndex: "1",
          name: "首页",
          subNavBar: [
            {
              icon: "el-icon-s-check",
              name: "后台首页",
              subActiveIndex: "1"
            },
            {
              icon: "el-icon-s-check",
              name: "相册管理",
              subActiveIndex: "2"
            },
            {
              icon: "el-icon-s-check",
              name: "商品列表",
              subActiveIndex: "3"
            }
          ]
        },
        {
          activeIndex: "2",
          name: "商品",
          subNavBar: [
            {
              icon: "el-icon-s-check",
              name: "商品列表",
              subActiveIndex: "1"
            },
            {
              icon: "el-icon-s-check",
              name: "分类列表",
              subActiveIndex: "2"
            },
            {
              icon: "el-icon-s-check",
              name: "商品规格",
              subActiveIndex: "3"
            },
            {
              icon: "el-icon-s-check",
              name: "商品类型",
              subActiveIndex: "4"
            },
            {
              icon: "el-icon-s-check",
              name: "商品评论",
              subActiveIndex: "5"
            }
          ]
        },
        {
          activeIndex: "3",
          name: "订单",
          subNavBar: [
            {
              icon: "el-icon-s-check",
              name: "订单管理",
              subActiveIndex: "1"
            },
            {
              icon: "el-icon-s-check",
              name: "发票管理",
              subActiveIndex: "2"
            },
            {
              icon: "el-icon-s-check",
              name: "售后服务",
              subActiveIndex: "3"
            }
          ]
        },
        {
          activeIndex: "4",
          name: "会员",
          subNavBar: [
            {
              icon: "el-icon-s-check",
              name: "会员列表",
              subActiveIndex: "1"
            },
            {
              icon: "el-icon-s-check",
              name: "会员等级",
              subActiveIndex: "2"
            }
          ]
        },
        {
          activeIndex: "5",
          name: "设置",
          subNavBar: [
            {
              icon: "el-icon-s-check",
              name: "基础设置",
              subActiveIndex: "1"
            },
            {
              icon: "el-icon-s-check",
              name: "物流设置",
              subActiveIndex: "2"
            },
            {
              icon: "el-icon-s-check",
              name: "管理员设置",
              subActiveIndex: "2"
            },
            {
              icon: "el-icon-s-check",
              name: "交易设置",
              subActiveIndex: "2"
            }
          ]
        }
      ]
    };
  },
  computed : {
      subNav(){
          return this.navBar[this.activeIndex - 1].subNavBar;
      }
  },
  methods: {
    handleSelect(index) {
        this.activeIndex = index;
      
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
}

.el-aside {
  width: 200px;
  background-color: #d3dce6;
  color: #333;
}
.el-aside .el-menu{
    height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>