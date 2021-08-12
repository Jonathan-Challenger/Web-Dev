import { createRouter, createWebHistory } from "vue-router";
import TV from '../views/TV'

const routes = [
    {
        path: '/tvshows',
        name: 'TV',
        component: TV
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router