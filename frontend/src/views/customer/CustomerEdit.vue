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
import addressMock from '@/mocks/address.mock';

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
          text: 'Criar Cliente',
          href: '/clientes/criar',
          disabled: true,
        },
      ],
      formItems: {
        name: 'customer',
        initialValues: {
          name: '',
          category: '',
          price: '',
        },
        model: {
          name: '',
          phone: '',
          address: '',
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
            label: 'Telefone',
            model: 'phone',
            value: '',
            type: 'input',
            isRequired: true,
            mask: ['(##) ####-####', '(##) #####-####'],
            errorMessage: 'O Telefone é Obrigatório',
          },
          {
            label: 'Endereço',
            model: 'address',
            value: '',
            type: 'select',
            isRequired: true,
            errorMessage: 'O Endereço é Obrigatório',
            options: addressMock,
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

<style lang="scss">
@import '@/sass/master';
</style>
