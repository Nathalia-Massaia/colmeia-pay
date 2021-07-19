<template>
  <div class="registerWrapper">
     <template v-for="item in menuItems">
      <PageLink :title="item.title" :route="item.route" :key="item.title" />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PageLink from '@/components/PageLink.vue';

export default Vue.extend({
  name: 'Register',
  components: {
    PageLink
  },
  data() {
    return {
      menuItems: [
        {
          title: 'Produtos',
          route: '/produtos'
        },
        {
          title: 'Categorias',
          route: '/categorias'
        },
        {
          title: 'Clientes',
          route: '/clientes/criar'
        }
      ]
    };
  }
});
</script>

<style lang="scss">
@import '@/sass/master';

.registerWrapper {
  @include flexbox(column, center, center, 0);
  width: 100%;
  height: 100%;
}
</style>
