const app = Vue.createApp({
  // data, functions
  // template: "<h2>I am the template</h2>",
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 55,
    };
  },
  methods: {
    changeTitle() {
      this.title = "Avengers Endgame";
    },
    toogleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
