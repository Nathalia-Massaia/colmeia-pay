import Product from '@/views/product/Product.vue';
import ProductEdit from '@/views/product/ProductEdit.vue';

export default [
  {
    path: '/produtos',
    name: 'Produtos',
    component: Product,
  },
  {
    path: '/produtos/criar',
    name: 'Cadastrar Produtos',
    component: ProductEdit,
  },
  {
    path: '/produtos/editar/:id',
    name: 'Editar Produtos',
    component: ProductEdit,
  },
];
