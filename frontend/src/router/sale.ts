import SaleEdit from '@/views/sale/SaleEdit.vue';
import Sale from '@/views/sale/Sale.vue';

export default [
  {
    path: '/vendas',
    name: 'Customers',
    component: Sale,
  },
  {
    path: '/vendas/criar',
    component: SaleEdit,
  },
  {
    path: '/vendas/editar/:id',
    component: SaleEdit,
  },
];
