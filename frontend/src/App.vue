<template>
  <v-app>
    <div class="bg"></div>

    <div class="loaderWrapper" v-if="onLoad">
      <Loader />
    </div>

    <div class="headerWrapper">
      <Header />
    </div>
    <v-main>
      <transition name="fade">
        <router-view class="routerView"></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import Loader from '@/components/Loader.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Loader,
  },

  computed: {
    ...mapState({
      onLoad: (state: any) => state.onLoad,
    }),
  },
});
</script>

<style lang="scss">
@import '@/sass/master';

v-app {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.loaderWrapper {
  z-index: map-get($layers, base);
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.514);
  @include flexbox(row, center, center, 0);
  position: fixed;
  right: 0;
  overflow: hidden;
}

.headerWrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: map-get($layers, menu);
}

#app {
  position: relative;
  height: 100vh;
  width: 100%;
  background: map-get($colors, gradient);
}

.bg {
  position: absolute;
  opacity: 0.2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('/img/bg.jpg');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.loaderWrapper {
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: map-get($layers, overlay);
}
</style>
