<template>
  <div class="registerWrapper">
    <h3>Cadastro de cliente</h3>
    <v-card>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Nome"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Endereço"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Número de telefone"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="confirme"
        >
          Confirmar
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Cancelar </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
  name: "Register",
  data() {
    return {};
  },
});
</script>

<style lang="scss">
@import "@/sass/master";
</style>
