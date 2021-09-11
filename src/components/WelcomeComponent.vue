<template>
  <div class="welcome">
    <div class="welcome-text">
      <h1>Jerry Braun | hope.-</h1>
      <p>German Software Engineer</p>
    </div>
    <div class="welcome-wave">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Welcome',

  data: () => ({}),
});
</script>

<style lang="scss">
.welcome {
  .welcome-text {
    margin: 400px 0 0 200px;

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
      margin-left: 10px;
      color: #a66cb8;
    }
  }
}
</style>
