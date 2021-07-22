import CategoryEdit from '@/views/category/CategoryEdit.vue';
import Category from '@/views/category/Category.vue';

export default [
  {
    path: '/categorias',
    name: 'Categorias',
    component: Category,
  },
  {
    path: '/categorias/criar',
    name: 'Cadastrar Categoria',
    component: CategoryEdit,
  },
  {
    path: '/categorias/editar/:id',
    name: 'Editar Categoria',
    component: CategoryEdit,
  },
];
