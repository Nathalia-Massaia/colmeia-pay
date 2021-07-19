<template>
  <div class="pageLinkWrapper">
    <router-link :to="route" class="pageLink">
      <v-btn>
        <span>{{ title }}</span>
      </v-btn>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PageLink',

  props: ['title', 'route'],

  data() {
    return {};
  },
});
</script>

<style lang="scss">
@import '@/sass/master';

.pageLinkWrapper {
  width: 100%;
  padding: map-get($spacings, xxsmall) map-get($spacings, xsmall);

  .pageLink {
    text-decoration: none;
    color: map-get($colors, secondary);

    button {
      width: 100%;
      transition: map-get($transition, fast);

      &:hover {
        background: map-get($colors, secondary) !important;
        color: map-get($colors, primary);
      }
    }
  }
}
</style>
