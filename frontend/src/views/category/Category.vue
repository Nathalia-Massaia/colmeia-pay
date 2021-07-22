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
        { text: '', value: 'actions', sortable: false },
      ],
      tableData: [
        {
          name: 'Mel',
        },
        {
          name: 'Carne',
        },
        {
          name: 'Legume',
        },
      ],
      breadcrumbItems: [
        {
          text: 'Home',
          href: '/',
          disabled: false,
        },
        {
          text: 'Categorias',
          href: '/categorias',
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
