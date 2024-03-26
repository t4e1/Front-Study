import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import HomeView from '@/views/01_router/HomeView.vue';
import PathVariable from '@/views/01_router/PathVariable.vue';
import QueryString from '@/views/01_router/QueryString.vue';

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/pathvariable/:id',
            component: PathVariable
            
            /* lazy loaded: 코드를 분할(청크)해서 필요한 대만 코드를 로딩하여 메모리 사용량 및 성능 향상 목적(코드 스플리팅) */
            /* 사용할 때는 위에 import 지우고 사용 */
            // component: () => import('../views/01_router/PathVariable.vue')
        },
        {
            path: '/querystring',
            component: QueryString
        }
    ]
})

/* router 객체를 export함 -> main.js 에서 import 할 용도  */
export default router;