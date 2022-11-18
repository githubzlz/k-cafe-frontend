import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContentView from "@/views/ContentView";
import {createWebHistory} from "vue-router/dist/vue-router.mjs";

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        props: {sidebar: false,header: true,footer: true},
        component: () => import('../layout/VueLayout'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: HomeView
            }
        ]
    },
    {
        path: '/note',
        name: 'note',
        props: {sidebar: true,header: true,footer: true},
        component: () => import('../layout/VueLayout'),
        children: [
            {
                path: '/note',
                name: 'note',
                component: ContentView
            }
        ]
    },
    {
        path: '/*',
        name: '404',
        component: () => import('../views/404View')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
