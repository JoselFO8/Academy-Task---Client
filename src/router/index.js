import {createWebHistory, createRouter} from 'vue-router'
import Login from '../components/Login.vue'
import Students from '../components/Students.vue'
import Task from '../components/Task.vue'
import Teachers from '../components/Teachers.vue'

/**
 * Project routes
 */
const routes = [
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Students',
        name: 'Students',
        component: Students
    },
    {
        path: '/Task',
        name: 'Task',
        component: Task
    },
    {
        path: '/Teachers',
        name: 'Teachers',
        component: Teachers
    },
];

/**
 * Router
 */
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;