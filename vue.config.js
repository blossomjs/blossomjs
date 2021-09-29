module.exports = {
  publicPath: "",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import '@/assets/css/variable.scss';
        @import '@/assets/css/mixins.scss';
        `,
      },
    },
  },
  devServer: {
    // proxy: "http://localhost:8080/",
    proxy: "http://119.91.253.247/",
  },
}
