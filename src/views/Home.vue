<template>
  <div>
    <Welcome/>
    <AboutMe/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Welcome from '@/components/WelcomeComponent.vue';
import AboutMe from '@/components/AboutMe.vue';

export default Vue.extend({
  name: 'Home',

  components: {
    AboutMe,
    Welcome,
  },
});
</script>
