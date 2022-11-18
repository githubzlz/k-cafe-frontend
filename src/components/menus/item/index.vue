<template>
  <div class="menu-item" :style="`margin-left: ${span}px; width: calc(90% - ${span}px)`">
    <div class="menu-title-disable" v-if="data.data.type === 'null'">
      <span>
        {{ genSequenceNumber() + ' ' }}{{ info.title }}
      </span>
      <span class="title-suffix">{{genSuffix(data.data)}}</span>
    </div>
    <div class="menu-title" v-on:click="menuClick(data.data)" v-else>
      <span>
        {{ genSequenceNumber() + ' ' }}{{ info.title }}
      </span>
      <span class="title-suffix">{{genSuffix(data.data)}}</span>
    </div>
    <el-icon class="menu-spawn" v-if="expand.show" v-on:click="expandClick">
      <ArrowDownBold v-if="expand.state"/>
      <ArrowRightBold v-else/>
    </el-icon>
  </div>
  <template v-if="expand.state">
    <div v-for="(menu,i) in data.data.children" v-bind:key="i">
      <menu-item :data="buildChildInfo(menu, i)" @menu-click="menuClick"/>
    </div>
  </template>
</template>

<script>
import {SqType} from "@/assets/js/sqtype";

export default {
  name: "MenuItem",
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  emits: ['menuClick'],
  data() {
    return {
      info: {},
      expand: {
        state: false,
        show: false
      },
      span: this.data.level * 10,
      number: [],
    }
  },
  watch: {
    data: function () {
      this.initInfo()
    }
  },
  methods: {
    genTitleStyle(menu){
      if(menu.type === 'null'){
        return 'color:rgba(0,0,0,0.4);'
      } else {
        return 'cursor: pointer;'
      }
    },
    initInfo() {
      this.info = {
        title: this.data.data.name,
        sq: '',
        parent: this.data.parent,
      }
      this.expand.show = this.data.data.children && this.data.data.children.length > 0
    },
    menuClick(menu) {
      this.$emit('menuClick', menu)
    },
    expandClick() {
      this.expand.state = !this.expand.state;
    },
    genSequenceNumber() {
      let sq = ''
      if (this.data.autoSq.state) {
        if (SqType.level === this.data.autoSq.type) {
          if (this.data.level === 1) {
            sq = `第${this.data.index + 1}节`
          } else if (this.data.level === 2) {
            sq = `${this.data.index + 1}.`
          } else {
            sq = `${this.data.parent.sq}${this.data.index + 1}`
          }
        } else {
          if (this.data.level === 1) {
            sq = `${this.data.parent.sq}${this.data.index + 1}`
          } else {
            sq = `${this.data.parent.sq}.${this.data.index + 1}`
          }
        }
      }

      this.info.sq = sq
      return sq
    },
    genSuffix(menu) {
      if(menu.type === 'null'){
        return '(未完成)'
      }
      return ''
    },
    buildChildInfo(menu, i) {
      return {
        level: this.data.level + 1,
        index: i,
        data: menu,
        autoSq: this.data.autoSq,
        parent: this.info
      }
    }
  },
  created() {
  },
  mounted() {
    this.initInfo()
    this.buildChildInfo()
  }
}
</script>

<style scoped>
.menu-item {
  position: relative;
  font-weight: normal;
  font-size: 14px;
  height: 35px;
  line-height: 35px;
  padding-left: 5px;
  border-radius: 5px;
  width: 90%;
  transition: all 0.2s;
  overflow: hidden;
}

.menu-item:hover {
  background-color: rgba(180, 180, 180, 0.1);
}

.menu-title {
  width: calc(100% - 30px);
  transition: all 0.2s;
  cursor: pointer;
}
.menu-title-disable{
  width: calc(100% - 30px);
  color: rgba(0,0,0,0.4);
}
.menu-title:hover {
  color: #409eff;
  text-decoration: underline;
  overflow: visible;
}

.menu-spawn {
  position: absolute;
  right: 0;
  cursor: pointer;
  margin-right: 10px;
  float: right;
  top: 50%;
  transform: translateY(-50%);
}
.title-suffix{
  font-size: 10px;
}
</style>
