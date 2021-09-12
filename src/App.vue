<template>
  <v-app id="app">
    <v-toolbar-items>
      <v-list-item>
        <v-list-item-content>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="$vuetify.theme.dark"/>
        </v-list-item-action>
      </v-list-item>
      <v-divider/>
    </v-toolbar-items>
    <router-view/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light';
    },
  },
});
</script>

<style lang="scss">
html {
  overflow-y: auto !important;
}

#app {
  background-color: var(--v-background-base);
}

.v-toolbar__items {
  background: var(--v-secondary-base);
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--v-background-lighten1);
}

::-webkit-scrollbar-thumb {
  background: var(--v-secondary-darken2);
  border-radius: 12px;

  &:hover {
    background: var(--v-secondary-darken3);
  }
}
</style>
