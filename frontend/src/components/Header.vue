<template>
  <v-bottom-navigation horizontal>
    <v-btn icon>
      <router-link to="/">
        <v-icon>mdi-home</v-icon>
        <span>Home</span>
      </router-link>
    </v-btn>

    <v-btn icon>
      <router-link to="/">
        <v-icon>mdi-currency-usd</v-icon>
        <span>Vender</span>
      </router-link>
    </v-btn>

    <v-btn icon>
      <router-link to="/register">
        <v-icon>mdi-plus</v-icon>
        <span>Cadastrar</span>
      </router-link>
    </v-btn>

    <v-btn icon>
      <router-link to="/">
        <v-icon>mdi-chart-line</v-icon>
        <span>Relatórios</span>
      </router-link>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  data() {
    return {};
  },
});
</script>

<style lang="scss">
@import '@/sass/master';

.v-bottom-navigation {
  justify-content: space-between !important;

  a {
    text-decoration: none;
    color: map-get($colors, secondary) !important;
    @include flexbox(column, center, center, 0.2rem);
  }

  .v-btn {
    flex: 1 !important;
  }
}
</style>
