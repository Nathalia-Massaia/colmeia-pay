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
          text: 'Categoria',
          value: 'category',
        },
        {
          text: 'Preço',
          value: 'price',
        },
      ],
      tableData: [
        {
          name: 'Própolis/Litro',
          category: 'Mel',
          price: 60,
        },
        {
          name: 'Mel/Litro',
          category: 'Mel',
          price: 40,
        },
      ],
      breadcrumbItems: [
        {
          text: 'Home',
          href: '/',
          disabled: false,
        },
        {
          text: 'Produtos',
          href: '/produtos',
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
