import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import Insight from '@/views/Insight.vue';

import product from './product';
import category from './category';
import customer from './customer';
import sale from './sale';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/register',
    name: 'Cadastros',
    component: Register,
  },
  {
    path: '/insight',
    name: 'Relatório de Vendas',
    component: Insight,
  },
  ...product,
  ...category,
  ...customer,
  ...sale,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
