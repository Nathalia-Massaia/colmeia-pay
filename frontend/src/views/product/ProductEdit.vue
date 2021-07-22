<template>
  <div>
    <FormTemplate
      :id="id"
      :title="title"
      :breadcrumbs="breadcrumbItems"
      :formItems="formItems"
    />
  </div>
</template>

<script lang="ts">
import FormTemplate from '@/components/FormTemplate.vue';
import categoriesMock from '@/mocks/categorie.mock';

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
          text: 'Criar Produto',
          href: '/produtos/criar',
          disabled: true,
        },
      ],
      formItems: {
        name: 'product',
        initialValues: {
          name: '',
          category: '',
          price: '',
        },
        model: {
          name: '',
          category: '',
          price: '',
        },
        items: [
          {
            label: 'Nome',
            model: 'name',
            value: '',
            type: 'input',
            isRequired: true,
            errorMessage: 'O Nome é Obrigatório',
          },
          {
            label: 'Categoria',
            model: 'category',
            value: '',
            type: 'select',
            isRequired: true,
            errorMessage: 'A Categoria é Obrigatória',
            options: categoriesMock,
          },
          {
            label: 'Preço Unitário',
            model: 'price',
            value: '',
            type: 'input',
            isRequired: true,
            mask: ['R$ #,##', 'R$ ##,##', 'R$ ###,##'],
            errorMessage: 'O Preço é Obrigatório',
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
