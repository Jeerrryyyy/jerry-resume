<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
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
    <v-main>
      <router-view/>
    </v-main>
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

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #121212;
}

::-webkit-scrollbar-thumb {
  background: #a66cb8;
  border-radius: 12px;
}

::-webkit-scrollbar-thumb:hover {
  background: darken(#a66cb8, 10)
}
</style>
