<template>
  <div>
    <div id="catalog">
      目录
    </div>
    <div class="menu" v-for="(group,i) in data" v-bind:key="i">
      <div class="top-menu">
        <span class="menu-title" :style="genTitleStyle(group)">
          {{ genSequenceNumber(i) + ' ' }}
          {{ group.name }}
          <span class="title-suffix">{{ genSuffix(group) }}</span>
        </span>
      </div>
      <div class="menu" v-for="(menu,j) in group.children" v-bind:key="`${i}-${j}`">
        <menu-item :data="handlerMenuData(menu,i,j)" @menu-click="handleMenuClick"/>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "@/components/menus/item";
import {SqType} from "@/assets/js/sqtype";

export default {
  name: "SideBarMenus",
  components: {MenuItem},
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      sq: [],
      autoSq: {
        state: true,
        type: SqType.append
      },
    }
  },
  methods: {
    genTitleStyle(group) {
      if (group.type === 'null') {
        return 'color:rgba(0,0,0,0.4);'
      } else {
        return 'cursor: pointer;'
      }
    },
    handleMenuClick(menu) {
      this.$emit('nodeClick', menu)
    },
    handlerMenuData(menu, i, j) {
      return {
        level: 1,
        index: j,
        data: menu,
        autoSq: this.autoSq,
        parent: {
          index: i,
          sq: this.sq[i],
          data: this.data,
        }
      }
    },
    genSequenceNumber(index) {
      let sq = ''
      if (this.autoSq.state) {
        if (SqType.level === this.autoSq.type) {
          sq = this.genChSequenceNumber(index)
        } else {
          sq = (index + 1) + '.'
        }
      }
      this.sq.push(sq)
      return sq
    },
    genChSequenceNumber(index) {
      const indexStr = (index + 1) + ''
      const charSqs = '零一二三四五六七八九十百千万'
      let sq = ''
      for (let i = 0; i < indexStr.length; i++) {
        const number = Number.parseInt(indexStr.charAt(i));
        let str = ''
        if (i === indexStr.length - 1) {
          if (number !== 0) {
            str = charSqs.charAt(number)
          }
        } else {
          const numStr = charSqs.charAt(Number.parseInt(indexStr.charAt(i)));
          const unit = charSqs.charAt(8 + (indexStr.length - i))
          if (numStr === charSqs.charAt(1) && unit === '十') {
            // 一十二 -> 十二
            str = unit
          } else if (numStr === charSqs.charAt(0)) {
            // 零不加单位,零的前面不能为零（零零）
            if (sq.charAt(sq.length - 1) !== charSqs.charAt(0)) {
              str = charSqs.charAt(0)
            }

          } else {
            str = numStr + unit
          }

        }
        sq += str
      }
      return `第${this.removeZero(sq)}章`
    },
    genSuffix(menu) {
      if(menu.type === 'null'){
        return '(未完成)'
      }
      return ''
    },
    removeZero(sq) {
      if (!sq || sq.length < 1 || sq.charAt(sq.length - 1) !== '零') {
        return sq
      }
      sq = sq.substring(0, sq.length - 1)
      return this.removeZero(sq)
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
#catalog {
  margin: 10px 10px 0 10px;
  padding-left: 5px;
  font-size: 20px;
  font-weight: bolder;
  border-left: 4px solid #409eff;
}

.menu {
  color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s;
}

.top-menu {
  display: inline-block;
  font-weight: bolder;
  font-size: 15px;
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
  margin-top: 8px;
}
.menu-title{
  transition: all 0.3s;
}
.menu-title:hover{
  color: #409eff;
}
.title-suffix{
  font-size: 10px;
}

</style>
