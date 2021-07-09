<template>
  <v-app>
    <div class="bee">
      <img src="/img/bee3.gif" alt="Bee Animation" />
    </div>
    <div class="bg"></div>

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

export default Vue.extend({
  name: 'App',

  data: () => ({}),
});
</script>

<style lang="scss">
@import '@/sass/master';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.loaderWrapper {
  z-index: 99;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.514);
  @include flexbox(row, center, center, 0);
  position: fixed;
  right: 0;
  overflow: hidden;
}

/* .routerView {
  width: 100%;
  z-index: 1;
  position: fixed;
} */

.headerWrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
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

.bee {
  position: absolute;
  z-index: map-get($layers, base);
  right: 0;
  transform: scaleX(-1);

  > img {
    width: 8rem;
  }
}
</style>
