<template>
  <div class="registerWrapper">
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
  name: 'Register',
  components: {
    PageLink,
    Bee,
  },
  data() {
    return {
      menuItems: [
        {
          title: 'Produtos',
          route: '/produtos/criar',
        },
        {
          title: 'Categorias',
          route: '/categorias/criar',
        },
        {
          title: 'Clientes',
          route: '/clientes/criar',
        },
      ],
    };
  },
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
