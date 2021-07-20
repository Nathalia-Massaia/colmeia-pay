<template>
  <div class="beeWrapper">
    <img src="/img/bee3.gif" alt="Bee Animation" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Bee',
  data() {
    return {};
  },
});
</script>

<style lang="scss">
@import '@/sass/master';

.beeWrapper {
  position: absolute;
  z-index: map-get($layers, base);
  right: 0;
  top: 0;
  transform: scaleX(-1);

  > img {
    width: 8rem;
  }
}
</style>
