<template>
  <div class="registerCustomerWrapper">
    <h2>Cadastro de cliente</h2>
    <v-card class="cardWrapper">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" label="Nome" required></v-text-field>

        <v-text-field
          v-model="address"
          label="Endereço"
          required
        ></v-text-field>
        <v-text-field
          v-model="phone"
          label="Número de telefone"
          required
        ></v-text-field>

        <v-btn color="success" class="mr-4" @click="confirme">
          Confirmar
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Cancelar </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'RegisterCustomer',
  data() {
    return {};
  }
});
</script>

<style lang="scss">
@import '@/sass/master';

.registerCustomerWrapper {
  @include flexbox(column, center, center, 1rem);
}

.cardWrapper {
  padding: map-get($spacings, xxsmall);
}
</style>