<template>
  <div id="sidebar">
    <side-bar-menus id="inner-sidebar" :data="data" @node-click="handleMenuClick"/>
  </div>
</template>

<script>
import SideBarMenus from "@/components/menus";

export default {
  name: "SideBar",
  props:{
    data:{
      type: Array,
      default: function (){
        return []
      }
    }
  },
  components: {SideBarMenus},
  data() {
    return {
    }
  },
  methods: {
    handleMenuClick(menu) {
      this.$emit('nodeClick', menu)
    },
  },
  mounted() {
  }
}
</script>

<style scoped>
#sidebar {
  z-index: 88;
  width: 100%;
  height: 100%;
  padding: 30px 10px 10px 10px;
}
#inner-sidebar{
  padding: 1px 0 0 15px;
  height: inherit;
  border-radius: 10px;
  overflow-y: scroll;
}
</style>
