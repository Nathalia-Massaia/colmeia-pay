<template>
  <v-bottom-navigation horizontal>
    <router-link to="/">
      <v-btn icon>
        <v-icon>mdi-home</v-icon>
        <span>Home</span>
      </v-btn>
    </router-link>

    <router-link to="/vendas">
      <v-btn icon>
        <v-icon>mdi-currency-usd</v-icon>
        <span>Vender</span>
      </v-btn>
    </router-link>

    <router-link to="/register">
      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
        <span>Cadastrar</span>
      </v-btn>
    </router-link>

    <router-link to="/insight">
      <v-btn icon>
        <v-icon>mdi-chart-line</v-icon>
        <span>Relatórios</span>
      </v-btn>
    </router-link>
  </v-bottom-navigation>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  data() {
    return {};
  }
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
    transition: map-get($transition, fast);
    @include flexbox(column, center, center, 0.2rem);
  }
  .v-btn__content {
    @include flexbox(column!important, center, center, 0.2rem);
  }
  .v-icon {
    margin-right: 0 !important;
  }

  .router-link-exact-active {
    .v-btn {
      background-color: map-get($colors, secondary);

      span {
        color: map-get($colors, primary) !important;
      }
    }
  }
}
</style>
