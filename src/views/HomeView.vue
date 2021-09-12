<template>
  <div>
    <WelcomeComponent/>
    <AboutMeComponent/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import AboutMeComponent from '@/components/AboutMeComponent.vue';
import WelcomeComponent from '@/components/WelcomeComponent.vue';

@Component({
  components: {
    AboutMeComponent,
    WelcomeComponent,
  },
})
export default class HomeView extends Vue {
}
</script>
