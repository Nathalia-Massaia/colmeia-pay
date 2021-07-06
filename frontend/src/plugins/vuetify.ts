import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import pt from 'vuetify/src/locale/pt';
import VuetifyConfirm from 'vuetify-confirm';

const vuetify = new Vuetify({
  lang: {
    locales: { pt },
    current: 'pt',
  },
  theme: {
    themes: {
      light: {
        primary: '#FFCD01',
      },
    },
  },
});

Vue.use(Vuetify);
Vue.use(VuetifyConfirm, {
  vuetify,
  buttonTrueText: 'Sim',
  buttonFalseText: 'Não',
  color: '#FFCD01',
  icon: 'mdi-alert-circle-outline',
  title: 'Aviso',
  width: 350,
  property: '$confirm',
});

export default vuetify;
