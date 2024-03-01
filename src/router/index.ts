import routes from './routes'
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import { defineAsyncComponent } from 'vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router