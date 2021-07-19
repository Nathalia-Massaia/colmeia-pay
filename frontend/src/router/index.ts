import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import CustomerEdit from '@/views/customer/CustomerEdit.vue';
import Customer from '@/views/customer/Customer.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/produtos',
    name: 'Products',
    component: Home,
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: Register,
  },
  {
    path: '/clientes',
    name: 'Customers',
    component: Customer,
  },
    {
      path: '/clientes/criar',
      component: CustomerEdit,
  
    },
    {
      path: '/clientes/editar/:id',
      component: CustomerEdit,
    },
  
  {
    path: '/vendas',
    name: 'Sales',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
