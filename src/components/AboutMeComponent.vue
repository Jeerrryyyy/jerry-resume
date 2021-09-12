<template>
  <div class="aboutme-container" id="aboutme-container">
    <h1>Hello, World!</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class AboutMeComponent extends Vue {
}
</script>

<style lang="scss">
.aboutme-container {
  margin-top: 20em;
  margin-bottom: 20em;
}
</style>
