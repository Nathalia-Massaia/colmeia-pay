import Customer from '@/views/customer/Customer.vue';
import CustomerEdit from '@/views/customer/CustomerEdit.vue';

export default [
  {
    path: '/clientes',
    name: 'Clientes',
    component: Customer,
  },
  {
    path: '/clientes/criar',
    name: 'Cadastrar Cliente',
    component: CustomerEdit,
  },
  {
    path: '/clientes/editar/:id',
    name: 'Editar Cliente',
    component: CustomerEdit,
  },
];
