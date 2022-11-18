import './plugins/api/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/global.css'
import '@/assets/css/mdtoc.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import installElementPlus from '@/plugins/element'
import './plugins/element.js'

let Vue = createApp(App);
Vue.use(router)

installElementPlus(Vue)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    Vue.component(key, component)
}

Vue.mount('#app')
