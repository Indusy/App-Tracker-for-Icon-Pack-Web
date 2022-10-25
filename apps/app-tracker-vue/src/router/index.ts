import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/home.vue'),
  },
  {
    name: 'doc',
    path: '/doc',
    props: ({ query: { name } }) => ({ docName: name }),
    component: () => import('@/views/doc.vue'),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
