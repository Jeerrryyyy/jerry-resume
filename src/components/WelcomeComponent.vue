<template>
  <div class="welcome-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path d="M0,64L21.8,74.7C43.6,85,87,107,131,101.3C174.5,96,218,64,262,74.7C305.5,85,349,139,
      393,144C436.4,149,480,107,524,80C567.3,53,611,43,655,85.3C698.2,128,742,224,785,229.3C829.1,
      235,873,149,916,138.7C960,128,1004,192,1047,186.7C1090.9,181,1135,107,1178,85.3C1221.8,64,
      1265,96,1309,122.7C1352.7,149,1396,171,1418,181.3L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,
      1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,
      0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,
      131,0C87.3,0,44,0,22,0L0,0Z"></path>
    </svg>
    <div class="welcome">
      <div class="welcome-text">
        <h1>Jerry Braun</h1>
        <p>German Software Engineer</p>
      </div>
      <v-icon class="welcome-arrow">mdi-arrow-down-thick</v-icon>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Welcome',

  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light';
    },
  },
});
</script>

<style lang="scss">
.welcome-container {
  svg {
    fill: var(--v-secondary-base);
    transform-origin: top;
    animation: animateWave 2000ms cubic-bezier(.23, 1, .32, 1) forwards;
  }

  .welcome {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;

    margin-top: -5em;

    .welcome-text {
      background-color: rgba(0, 0, 0, 0.1);

      margin-bottom: 3em;
      padding: 0 1em 0 1em;
      border-radius: 15px;
      width: fit-content;

      h1 {
        margin: 0;
        font-size: 6em;
      }

      p {
        margin-top: -.5em;
        font-size: 2em;
      }
    }

    .welcome-arrow {
      font-size: 4em;
      color: var(--v-secondary-base);
      animation: animateArrow 2000ms ease-in-out infinite;

      border: 2px solid var(--v-secondary-base);
      border-radius: 20%;
      cursor: pointer;

      transition: .5s;

      &:hover {
        background: var(--v-secondary-base);

        color: var(--v-primary-base);
      }
    }
  }
}

@keyframes animateWave {
  0% {
    transform: scale(1, 0)
  }

  100% {
    transform: scale(1, 1)
  }
}

@keyframes animateArrow {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
