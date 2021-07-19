<template>
  <div class='registerWrapper'>
    <h1>Register</h1>
    <v-card>
      <h1>oi</h1>
    </v-card>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Register',
  data(){
    return {}
  }
});
</script>

<style lang="scss">
@import '@/sass/master';

.registerWrapper {
  @include flexbox(column, center, center, 1rem);
}

</style>
