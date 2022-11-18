<template>
  <div id="md-view">
    <div id="md-content">
      <textarea />
    </div>
    <div id="md-toc" />
  </div>
</template>

<script>
import {config, md} from "@/assets/js/editor";

export default {
  name: "MdInterpreter",
  props:{
    menu:{
      type: Object,
      default: null
    }
  },
  watch:{
    menu: function () {
      this.reBuildMd()
    }
  },
  methods:{
    initMd(){
      if(this.menu.links && this.menu.links[0] === '1'){
        config.markdown = md
      }else {
        config.markdown = "# 12312\n ## 312\n ### 123123123"
      }
      this.blogEditor = window.editormd.markdownToHTML('md-content', config)
      const toc = this.blogEditor.tocContainer[0];
      if(toc){
        let html = toc.innerHTML
        if(html){
          html = html.replaceAll('markdown-toc-list','my-markdown-toc-list')
          html = html.replaceAll('toc-level','my-toc-level')
          document.getElementById('md-toc-show').innerHTML = html
        }
      }
    },
    reBuildMd(){
      document.getElementById('md-content').innerHTML = ''
      if(this.menu.links && this.menu.links[0] === '1'){
        config.markdown = md
      }else {
        config.markdown = "# 12312\n ## 312\n ### 123123123"
      }
      this.blogEditor = window.editormd.markdownToHTML('md-content', config)
      const toc = this.blogEditor.tocContainer[0];
      if(toc){
        let html = toc.innerHTML
        if(html){
          html = html.replaceAll('markdown-toc-list','my-markdown-toc-list')
          html = html.replaceAll('toc-level','my-toc-level')
          document.getElementById('md-toc-show').innerHTML = html
        }
      }
    }
  },
  mounted() {
    this.initMd()
  }
}
</script>

<style scoped>
#md-view{
  width: 100%;
}
#md-content{
  width: 100%;
}

#md-toc{
  display: none;
}
</style>
