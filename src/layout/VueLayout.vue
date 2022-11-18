<template>
  <div id="layout">
    <div class="header-limit" v-if="header">
      <layout-header id="header"/>
    </div>
    <side-bar v-if="sidebar" :data="menus" @node-click="nodeClick" id="sidebar"/>
    <div id="body">
      <template v-if="sidebar">
        <div class="content" id="content-with-sidebar">
          <router-view :current-menu="currentMenu" @update-menus="updateMenus" style="min-height: calc(100% - 100px);"/>
          <layout-footer id="footer" v-if="footer"/>
        </div>
      </template>
      <template v-else>
        <div class="content" id="content-without-sidebar">
          <router-view style="min-height: calc(100% - 100px);"/>
          <layout-footer id="footer" v-if=" footer"/>
        </div>
      </template>
    </div>
    <div id="md-toc-show"></div>
  </div>
</template>

<script>
import LayoutFooter from "@/layout/footer";
import LayoutHeader from "@/layout/header";
import SideBar from "@/layout/sidebar";
import $ from 'jquery'

export default {
  name: "LayoutView",
  props: {
    sidebar: {
      type: Boolean,
      default: false
    },
    header: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menus: [],
      currentMenu: null
    }
  },
  components: {
    LayoutFooter, LayoutHeader, SideBar
  },
  methods: {
    updateMenus(menus) {
      this.menus = menus
    },
    nodeClick(menu){
      this.currentMenu = menu
    }
  },
  mounted() {
    if (this.sidebar) {
      onresize()
      window.addEventListener('resize', function () {
        onresize()
      });
    }
    function onresize() {
      const body = document.getElementById('body')
      const sidebar = document.getElementById('sidebar')
      const width = body.offsetWidth - sidebar.offsetWidth
      document.getElementById('content-with-sidebar').style.width = width + 'px'
      sidebar.style.left = `${$('#body').position().left}px`

      // document.getElementById('md-toc-show').
    }
  }
}
</script>

<style scoped>
#layout {
  height: 100%;
  width: 100%;
}

.header-limit {
  z-index: 99;
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

#header {
  max-width: 1580px;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

#body {
  position: relative;
  max-width: 1500px;
  width: 100%;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

#sidebar {
  position: fixed;
  top: 70px;
  overflow: hidden;
  width: 20%;
  height: calc(100% - 70px);
  min-width: 250px;
  max-width: 350px;
}

.content {
  padding-top: 70px;
  width: 100%;
  height: calc(100% - 70px);
}

#content-with-sidebar {
  float: right;
}

#content-without-sidebar {
}

#footer {
  height: 100px;
  width: 100%;
}
#md-toc-show{
  position: fixed;
  right: 30px;
  top: 90px;
  transition: all 0.3s;
  height: 85%;
  overflow-y: scroll;
}
@media screen and (max-width: 1300px){
  #md-toc-show{
    display: none;
  }
}
</style>
