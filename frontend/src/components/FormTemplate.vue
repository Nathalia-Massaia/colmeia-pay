<template>
  <div class="formTemplateWrapper">
    <div class="titleWrapper">
      <h2>
        {{ title }}
      </h2>
      <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
    </div>

    <v-card elevation="2" class="formWrapper">
      <v-form
        :model="formItems.model"
        :rules="!id ? formItems.rules : {}"
        :ref="formItems.model"
      >
        <v-row v-for="item in formItems.items" :key="item.name">
          <template v-if="item.type === 'input'">
            <v-col v-if="!item.mask">
              <v-text-field
                autocomplete="off"
                v-model="formItems.model[item.model]"
                :prop="item.model"
                :required="item.isRequired"
                :label="item.label"
                :error-messages="
                  hasError && !formItems.model[item.model]
                    ? item.errorMessage
                    : ''
                "
                :disabled="item.disabled"
                dense
                outlined
                color="#402803"
              ></v-text-field>
            </v-col>

            <v-col v-if="item.mask">
              <v-text-field
                autocomplete="off"
                v-model="formItems.model[item.model]"
                :prop="item.model"
                :required="item.isRequired"
                :error-messages="
                  hasError && item.isRequired && !formItems.model[item.model]
                    ? item.errorMessage
                    : ''
                "
                :label="item.label"
                v-mask="[...item.mask]"
                dense
                outlined
                color="#402803"
              ></v-text-field>
            </v-col>
          </template>

          <template v-if="item.type === 'checkbox'">
            <v-row>
              <v-col>
                <v-checkbox
                  v-model="formItems.model[item.model]"
                  :prop="item.model"
                  :label="item.label"
                  color="#e99205"
                  hide-details
                ></v-checkbox>
              </v-col>
            </v-row>
          </template>

          <template v-if="item.type === 'select'">
            <v-select
              return-object
              :items="item.options"
              item-text="name"
              :multiple="item.multiple"
              v-model="formItems.model[item.model]"
              :prop="item.model"
              :required="item.isRequired"
              :label="item.label"
              :error-messages="
                hasError && !formItems.model[item.model]
                  ? item.errorMessage
                  : ''
              "
              dense
              outlined
              color="#402803"
              @change="handleSetTotal"
            ></v-select>
          </template>
        </v-row>

        <template v-if="scope === 'sale'">
          <v-row>
            <v-col>
              <v-text-field
                autocomplete="off"
                v-model="total"
                :prop="total"
                label="Total"
                disabled
                dense
                outlined
                color="#402803"
              ></v-text-field>
            </v-col>
          </v-row>
        </template>
      </v-form>

      <v-col class="actionWrapper">
        <v-btn
          color="primary"
          elevation="2"
          aria-label="action button"
          @click="id ? update() : submit()"
          >{{ this.id ? 'Atualizar' : 'Enviar' }}</v-btn
        >
        <v-btn color="warning" elevation="2" @click="clear()">Limpar</v-btn>
      </v-col>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FormTemplate',
  props: ['id', 'title', 'formItems', 'breadcrumbs', 'scope'],
  data() {
    return {
      hasError: false,
      total: 0,
    };
  },
  methods: {
    submit() {
      if (
        Object.values(this.formItems.model).indexOf('') > -1 ||
        Object.values(this.formItems.model).indexOf(null) > -1
      ) {
        this.hasError = true;
        return;
      } else {
        this.hasError = false;
        console.log(this.formItems.model);
      }
    },
    update() {
      console.log(this.id);
      console.log(this.formItems.model);
    },
    clear() {
      (this.$refs[this.formItems.model] as any).reset();
      this.hasError = false;
    },

    handleSetTotal() {
      this.total = +this.total
        .toString()
        .replace('R$', '')
        .replace(',', '.')
        .trim();

      this.total = this.formItems.model.products.reduce(
        (acc: any, curr: any) => {
          if (this.formItems.model.products.length) {
            return acc + curr.price;
          } else {
            return 0;
          }
        },
        0
      );

      (this.total as any) = new Intl.NumberFormat('pt-br', {
        currency: 'BRL',
        style: 'currency',
      }).format(this.total);
    },
  },
});
</script>

<style lang="scss">
@import '@/sass/master';

.formTemplateWrapper {
  position: relative;
  padding: map-get($spacings, xxsmall) map-get($spacings, xxsmall) 0;

  .titleWrapper {
    @include flexbox(column, center, center, 0);
    height: 6rem;

    h2 {
      font-size: map-get(map-get($font, sizes), medium);
      color: map-get($colors, secondary);
      align-self: flex-start;
    }

    .v-breadcrumbs {
      align-self: flex-start;
      padding-left: 0;

      .v-breadcrumbs__item {
        color: map-get($colors, secondary);
      }

      .v-breadcrumbs__item--disabled {
        filter: opacity(0.6);
        color: map-get($colors, secondary);
        cursor: not-allowed;
      }
    }
  }

  .formWrapper {
    padding: map-get($spacings, xsmall);

    .v-select {
      padding: map-get($spacings, xxsmall);
      padding-bottom: 0;
    }

    .v-input--checkbox {
      padding: map-get($spacings, xxsmall);
      margin: 0;
      margin-bottom: map-get($spacings, xsmall);
    }

    .col {
      padding-bottom: 0;
    }
  }

  .actionWrapper {
    margin-top: map-get($spacings, xxsmall);
    padding: 0;
    @include flexbox(row, center, center, map-get($spacings, small));

    button {
      transition: map-get($transition, default);
      &:hover {
        filter: opacity(0.8);
      }
    }

    button:first-child {
      background: map-get($colors, darkYellow) !important;
    }

    button:last-child {
      background: map-get($colors, red) !important;
    }
  }
}
</style>
