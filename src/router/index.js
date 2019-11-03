/* eslint-disable no-console */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'search',
        component: () => import('../views/Search.vue'),
        meta: {
            title: "Search"
        },
        redirect: '/map',
        children: [
            {
                path: '/map',
                name: 'map-page',
                component: () => import('../views/Map-Page.vue'),
                meta: {
                    title: "Search - Map View"
                },
            },
            {
                path: '/list',
                name: 'list',
                component: () => import('../views/List.vue'),
                meta: {
                    title: "Search - List View"
                },
            },
        ],
    },
    {
        path: '/notifications',
        name: 'notifications',
        component: () => import('../views/Notifications.vue'),
        meta: {
            title: "Notifications"
        },
    },
    {
        path: '/saved',
        name: 'saved',
        component: () => import('../views/Saved.vue'),
        meta: {
            title: "Saved"
        },
    },
    
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = "MoJobs - " + to.meta.title;
    next();
})

export default router