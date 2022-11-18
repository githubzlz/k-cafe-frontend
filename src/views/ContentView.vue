<template>
  <div id="markdown">
    <div id="title">

    </div>
    <div id="content">
      <div id="digest" v-if="digest.state">

      </div>
      <md-interpreter :menu="current" v-else/>
    </div>
  </div>
</template>

<script>
import MdInterpreter from '@/components/interpreter/md'

export default {
  name: "ContentView",
  components: {
    MdInterpreter
  },
  props: {
    currentMenu: {
      type: Object,
      default: null
    }
  },
  watch: {
    currentMenu: function (n) {
      this.current = n
      this.digest.state = false
    }
  },
  data() {
    return {
      digest : {
        state: true
      },
      current: null,
      menus: [
        {
          name: 'Basic 基础组件',
          links: ['123'],
          type: 'catalog',
          children: [
            {
              name: 'Button 按钮按钮按钮按钮按钮按钮按钮按钮按钮',
              links: ['123'],
              type: 'null',
              children: [
                {
                  name: 'Button1',
                  links: ['123'],
                  type: 'blog',
                  children: [
                    {
                      name: 'Button11',
                      links: ['123'],
                      type: 'blog'
                    },
                    {
                      name: 'Button21',
                      links: ['123'],
                    },
                    {
                      name: 'Button31',
                      links: ['123'],
                    }
                  ]
                },
                {
                  name: 'Button2',
                  links: ['123'],
                },
                {
                  name: 'Button3',
                  links: ['123'],
                }
              ]
            },
            {
              name: 'Border 边框',
              links: ['1'],
              children: [
                {
                  name: 'Button1',
                  links: ['123'],
                },
                {
                  name: 'Button2',
                  links: ['123'],
                },
                {
                  name: 'Button3',
                  links: ['123'],
                }
              ]
            },
            {
              name: 'Button 按钮',
              links: ['123'],
            },
            {
              name: 'Border 边框',
              links: ['123'],
            },
          ]
        },
        {
          name: '配置组件',
          links: ['123'],
          type: 'null',
          children: [
            {
              name: 'Button 按钮',
              type: 'null',
              links: ['123'],
            },
            {
              name: 'Border 边框',
              links: ['123'],
            },
            {
              name: 'Button 按钮',
              links: ['123'],
            },
            {
              name: 'Border 边框',
              links: ['123'],
            },
            {
              name: 'Button 按钮',
              links: ['123'],
            },
            {
              name: 'Border 边框',
              links: ['123'],
            },
            {
              name: 'Button 按钮',
              links: ['123'],
            },
            {
              name: 'Border 边框',
              links: ['123'],
            },
            {
              name: 'Button 按钮',
              links: ['123'],
            },
            {
              name: 'Border 边框',
              links: ['123'],
            },
            {
              name: 'Button 按钮',
              links: ['123'],
            },
            {
              name: 'Border 边框',
              links: ['123'],
            },
            {
              name: 'Button 按钮',
              links: ['123'],
            },
            {
              name: 'Border 边框',
              links: ['123'],
            },
          ]
        },
        {
          name: 'Form 表单组件',
          links: ['123'],
          children: [
            {
              name: 'Border 边框',
              links: ['123'],
            },
            {
              name: 'Button 按钮',
              links: ['123'],
            },
            {
              name: 'Border 边框',
              links: ['123'],
            },
            {
              name: 'Button 按钮',
              links: ['123'],
            },
            {
              name: 'Border 边框',
              links: ['123'],
            },
          ]
        },
        {
          name: 'Form 表单组件',
          links: ['123'],
          children: [
            {
              name: 'Border 边框',
              links: ['123'],
            },
            {
              name: 'Button 按钮',
              links: ['123'],
            },
            {
              name: 'Border 边框',
              links: ['123'],
            },
            {
              name: 'Button 按钮',
              links: ['123'],
            },
            {
              name: 'Border 边框',
              links: ['123'],
            },
          ]
        }
      ]
    }
  },
  methods: {
    initMenu() {
      const menus = this.menus
      for (let i = 0; i < 10; i++) {
        menus.push({
          name: 'Form 表单组件',
          links: ['123'],
          type: 'null',
          children: [
            {
              name: 'Border 边框',
              links: ['123'],
              type: 'null',
            }
          ]
        })
      }
      this.$emit('updateMenus', menus)
    },

  },
  mounted() {
    this.initMenu()
  }
}
</script>

<style scoped>
#markdown {
  position: relative;
  overflow: hidden;
}

#title {
  height: 100px;
  background-color: white;
}

#content {
  width: 80%;
}

#digest{
  width: 100%;
  height: 300px;
  background-color: #409eff;
}
@media screen and (max-width: 1700px) {
  #content {
    width: 70%;
  }
}
@media screen and (max-width: 1500px) {
  #content {
    width: 65%;
  }
}
@media screen and (max-width: 1300px) {
  #content {
    width: 90%;
  }
}
</style>
