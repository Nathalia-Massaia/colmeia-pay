<template>
  <div>
    <FormTemplate
      :id="id"
      :title="title"
      :breadcrumbs="breadcrumbItems"
      :formItems="formItems"
      :scope="formItems.name"
    />
  </div>
</template>

<script lang="ts">
import FormTemplate from '@/components/FormTemplate.vue';
import customerMock from '@/mocks/customer.mock';
import productMock from '@/mocks/product.mock';

export default {
  components: {
    FormTemplate,
  },
  data() {
    return {
      id: '',
      title: '',
      breadcrumbItems: [
        {
          text: 'Home',
          href: '/',
          disabled: false,
        },
        {
          text: 'Cadastros',
          href: '/cadastros',
          disabled: false,
        },
        {
          text: 'Criar Venda',
          href: '/vendas/criar',
          disabled: true,
        },
      ],
      formItems: {
        name: 'sale',
        initialValues: {
          customer: '',
          products: [],
          total: '',
          isPaid: false,
          createdAt: new Intl.DateTimeFormat('pt-br').format(new Date()),
        },
        model: {
          customer: '',
          products: [],
          total: '',
          isPaid: false,
          createdAt: new Intl.DateTimeFormat('pt-br').format(new Date()),
        },
        items: [
          {
            label: 'Cliente',
            model: 'customer',
            value: '',
            type: 'select',
            isRequired: true,
            errorMessage: 'O Cliente é Obrigatório',
            options: customerMock,
          },
          {
            label: 'Produtos',
            model: 'products',
            value: '',
            type: 'select',
            multiple: true,
            isRequired: true,
            errorMessage: 'Pelo menos um Produto é Obrigatório',
            options: productMock,
          },
          {
            label: 'Pago?',
            model: 'isPaid',
            value: true,
            type: 'checkbox',
          },
          {
            label: 'Data',
            model: 'createdAt',
            value: new Intl.DateTimeFormat('pt-br').format(new Date()),
            type: 'input',
            disabled: true,
          },
        ],
      },
    };
  },
  mounted() {
    this.title = this.$route.name!;
    this.id = this.$route.params.id;
  },
};
</script>

<style></style>
