<template>
  <div>
    <DataTemplate
      :title="title"
      :headers="tableHeader"
      :data="tableData"
      :breadcrumbs="breadcrumbItems"
    />
  </div>
</template>

<script lang="ts">
import DataTemplate from '@/components/DataTemplate.vue';
export default {
  components: {
    DataTemplate,
  },
  data() {
    return {
      title: '',
      tableHeader: [
        {
          text: 'Nome',
          value: 'name',
        },
        {
          text: 'Telefone',
          value: 'phone',
        },
        {
          text: 'Endereço',
          value: 'address',
        },
        { text: '', value: 'actions', sortable: false },
      ],
      tableData: [
        {
          name: 'Teste da Silva',
          phone: '(81) 99810-0062',
          address: 'Ouro Branco',
        },
        {
          name: 'Véio da Banca',
          phone: '(81) 99810-0062',
          address: 'Itiquira',
        },
        {
          name: 'Gordo Fedido',
          phone: '(81) 99810-0062',
          address: 'Rondonópolis',
        },
      ],
      breadcrumbItems: [
        {
          text: 'Home',
          href: '/',
          disabled: false,
        },
        {
          text: 'Clientes',
          href: '/clientes',
          disabled: true,
        },
      ],
    };
  },
  mounted() {
    this.title = this.$route.name!;
  },
};
</script>

<style></style>
