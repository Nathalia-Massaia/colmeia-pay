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
import { ISale } from '@/interfaces/sale.interface';

export default {
  components: {
    DataTemplate,
  },
  data() {
    return {
      title: '',
      tableHeader: [
        {
          text: 'Cliente',
          value: 'customer',
        },
        {
          text: 'Produtos',
          value: 'products',
        },
        {
          text: 'Total',
          value: 'total',
        },
        {
          text: 'Paga?',
          value: 'isPaid',
        },
        {
          text: 'Data',
          value: 'createdAt',
        },
        { text: '', value: 'actions', sortable: false },
      ],
      tableData: [
        {
          customer: 'Teste da Silva',
          products: ['Mel', 'Própolis'],
          total: '120',
          isPaid: false || 'false',
          createdAt: '20/07/2021',
        },
      ],
      breadcrumbItems: [
        {
          text: 'Home',
          href: '/',
          disabled: false,
        },
        {
          text: 'Vendas',
          href: '/vendas',
          disabled: true,
        },
      ],
    };
  },
  mounted() {
    this.title = this.$route.name!;

    this.tableData.forEach((item: ISale) => {
      item.total = new Intl.NumberFormat('pt-br', {
        currency: 'BRL',
        style: 'currency',
      }).format(+item.total);

      item.isPaid = item.isPaid.toString() === 'true' ? 'Sim' : 'Não';
    });
  },
};
</script>

<style></style>
