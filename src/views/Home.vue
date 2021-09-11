<template>
  <Welcome/>
</template>

<script lang="ts">
import Vue from 'vue';
import Welcome from '@/components/WelcomeComponent.vue';

export default Vue.extend({
  name: 'Home',

  components: { Welcome },
});
</script>
