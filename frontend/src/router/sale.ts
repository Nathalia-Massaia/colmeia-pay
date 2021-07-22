import SaleEdit from '@/views/sale/SaleEdit.vue';
import Sale from '@/views/sale/Sale.vue';

export default [
  {
    path: '/vendas',
    name: 'Vendas',
    component: Sale,
  },
  {
    path: '/vendas/criar',
    name: 'Criar Venda',
    component: SaleEdit,
  },
  {
    path: '/vendas/editar/:id',
    name: 'Editar Venda',
    component: SaleEdit,
  },
];
