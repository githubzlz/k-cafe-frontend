import {
    ElButton, ElRow, ElCol, ElMenu, ElInput, ElIcon, ElTree
} from 'element-plus'
import 'element-plus/theme-chalk/index.css'


const components = [
    ElButton, ElRow, ElCol, ElMenu, ElInput, ElIcon, ElTree
]

export default (app) => {
    components.forEach(used => {
        app.use(used)
    })

}
