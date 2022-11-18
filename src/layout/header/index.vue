<template>
  <div id="header">
    <div id="logo">
      <font-logo></font-logo>
    </div>
    <div id="menus">
      <el-menu
          id="menu"
          :default-active="activeMenuIndex"
          mode="horizontal"
          :ellipsis="false"
          @select="menuSelected"
      >
        <template v-for="(item,i) in menus" v-bind:key="item.name">
          <el-sub-menu :index="i+''" v-if="item.children && item.children.length !== 0">
            <template #title>{{ item.name }}</template>
            <template v-for="(sub,j) in item.children" v-bind:key="sub.name">
              <el-sub-menu :index="`${i}-${j}`" v-if="sub.children && sub.children.length !== 0">
                <template #title>{{ sub.name }}</template>
                <template v-for="(subSub,k) in sub.children" v-bind:key="subSub.name">
                  <el-menu-item :index="`${i}-${j}-${k}`">
                    {{ subSub.name }}
                  </el-menu-item>
                </template>
              </el-sub-menu>
              <el-menu-item :index="`${i}-${j}`" v-else>
                {{ sub.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
          <el-menu-item :index="i+''" v-else>
            {{ item.name }}
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div id="search">
      <el-input
          class="search-input"
          v-model="searchInput"
          placeholder="全局检索"
          :suffix-icon="Search"
          size="large"
      />
    </div>
  </div>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
import FontLogo from "@/components/logo";
export default {
  name: "LayoutHeader",
  components: {FontLogo},
  setup(){
    return{
      Search
    }
  },
  data() {
    return {
      menus: [
        {
          name: 'Home',
          link: '/home'
        }, {
          name: 'Books',
          link: '/books',
          children: [
            {
              name: 'Java',
              link: '/notes',
            },
            {
              name: 'Python',
              link: '/notes',
            },
            {
              name: '其他',
              link: '/notes',
              children: [
                {
                  name: '多线程',
                  link: '/notes',
                }, {
                  name: 'IO',
                  link: '/notes',
                }, {
                  name: 'JVM',
                  link: '/notes',
                }
              ]
            }
          ]
        }, {
          name: 'Notes',
          link: '/notes',
          children: [
            {
              name: '分类1',
              link: '/notes',
            },
            {
              name: '分类2',
              link: '/notes',
            },
            {
              name: '分类3',
              link: '/notes',
              children: [
                {
                  name: '多线程',
                  link: '/notes',
                }, {
                  name: 'IO',
                  link: '/notes',
                }, {
                  name: 'JVM',
                  link: '/notes',
                }
              ]
            }
          ]
        }, {
          name: 'About',
          link: '/about',
        }
      ],
      activeMenuIndex: '0',
      searchInput:'',
    }
  },
  methods: {
    menuSelected() {

    }
  }
}
</script>

<style scoped>
#header {
  width: 100%;
  overflow: hidden;
}

#logo {
  width: 160px;
  position: relative;
  display: inline-block;
  height: 100%;
  float: left;
}
#search{
  position: relative;
  height: 100%;
  width: 220px;
  float: right;
  margin-right: 30px;
}
.search-input{
  top: 50%;
  transform: translateY(-50%);
}
#menus {
  display: inline-block;
  height: 102%;
  float: right;
}

#menu {
  height: 100%;
}
</style>
