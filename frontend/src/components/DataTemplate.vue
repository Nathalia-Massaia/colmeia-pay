<template>
  <div class="dataTemplateWrapper">
    <div class="titleWrapper">
      <h2>{{ title }}</h2>
      <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
    </div>

    <div class="searchWrapper">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Pesquisar..."
        hide-details
        dense
        filled
        outlined
      ></v-text-field>
    </div>

    <v-card class="tableWrapper">
      <v-data-table
        :headers="headers"
        :items="data"
        :search="search"
        fixed-header
        height="68vh"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
            aria-label="edit button"
          >
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)" aria-label="delete button">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DataTemplate',
  props: ['title', 'headers', 'data', 'breadcrumbs'],
  data() {
    return {
      search: '',
    };
  },
  methods: {
    editItem(item: any) {
      console.log(item);
    },

    deleteItem(item: any) {
      console.log(item);
    },
  },
});
</script>

<style lang="scss">
@import '@/sass/master';

.dataTemplateWrapper {
  position: relative;

  .titleWrapper {
    @include flexbox(row, center, space-between, 0);
    height: 4rem;
    padding: 0 map-get($spacings, xxsmall);

    h2 {
      font-size: map-get(map-get($font, sizes), medium);
      color: map-get($colors, secondary);
    }

    .v-breadcrumbs__item {
      color: map-get($colors, secondary);
    }
  }

  .searchWrapper {
    margin: 0 map-get($spacings, xxsmall);
    height: 3rem;
    @include flexbox(row, center, flex-start, 0);

    .v-input__slot {
      background: map-get($colors, white) !important;
    }

    .primary--text {
      color: map-get($colors, secondary) !important;
    }
  }

  .tableWrapper {
    height: calc(100vh - 14rem);
    overflow: auto;

    .v-data-table-header {
      .primary--text {
        color: map-get($colors, secondary) !important;
      }
    }

    .v-data-footer {
      background: map-get($colors, white) !important;
      width: 100%;
      position: fixed;
      bottom: 3.3rem;
      margin: 0 !important;
      @include flexbox(row, center, space-around, 0);

      .v-data-footer__pagination,
      .v-data-footer__select {
        margin: 0;
      }
    }

    table {
      tbody {
        tr {
          .v-icon {
            font-size: 30px !important;
          }

          td:last-child {
            min-width: 100px;

            .v-icon:first-child {
              color: map-get($colors, darkYellow);
              filter: brightness(130%);
            }

            .v-icon:last-child {
              color: map-get($colors, red);
              filter: brightness(130%);
            }
          }
        }
      }
    }
  }
}
</style>
