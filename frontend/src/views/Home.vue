<template>
  <div class="homeWrapper">
    <Bee />

    <template v-for="item in menuItems">
      <PageLink :title="item.title" :route="item.route" :key="item.title" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PageLink from '@/components/PageLink.vue';
import Bee from '@/components/Bee.vue';

export default Vue.extend({
  components: {
    PageLink,
    Bee,
  },
  data() {
    return {
      menuItems: [
        {
          title: 'Produtos',
          route: '/produtos',
        },
        {
          title: 'Categorias',
          route: '/categorias',
        },
        {
          title: 'Clientes',
          route: '/clientes',
        },
        {
          title: 'Vendas',
          route: '/vendas',
        },
      ],
    };
  },
});
</script>

<style lang="scss">
@import '@/sass/master';

.homeWrapper {
  @include flexbox(column, center, center, 0);
  width: 100%;
  height: 100%;
}
</style>
