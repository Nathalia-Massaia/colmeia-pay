<template>
  <div class="homeWrapper">

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({


  data() {
    return {};
  },
});
</script>

<style lang="scss">
@import '@/sass/master';

.homeWrapper {
  @include flexbox(row, center, center, 0);
  height: 100%;
}

h1 {
  color: map-get($colors, secondary);
  font-size: map-get(map-get($font, sizes), huge);
}
</style>
