import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    onLoad: false,
  },
  mutations: {
    SET_ISLOADING(state, data) {
      state.onLoad = data;
    },
  },
  actions: {
    handleLoad({ commit }, onLoad) {
      commit('SET_ONLOAD', onLoad);
    },
  },
});
