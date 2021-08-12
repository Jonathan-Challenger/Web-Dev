import { createRouter, createWebHistory } from "vue-router";
import TV from '../views/TV'
import Home from '../views/Home'
import Results from '../views/Results'
import Upcoming from '../views/Upcoming'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tvshows',
        name: 'TV',
        component: TV
    },
    {
        path: '/results',
        name: 'Results',
        component: Results
    },
    {
        path: '/upcoming',
        name: 'Upcoming',
        component: Upcoming
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router