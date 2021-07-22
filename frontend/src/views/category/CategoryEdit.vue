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
          text: 'Criar Categoria',
          href: '/categorias/criar',
          disabled: true,
        },
      ],
      formItems: {
        name: 'category',
        initialValues: {
          name: '',
        },
        model: {
          name: '',
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
