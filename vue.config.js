module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/colors.scss"; @import "@/assets/normalize.scss";',
      },
    },
  },
};
