// router.ts
import Contact from '@/views/contact/Contact.vue'
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Contact',
        component: Contact
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;