const app = Vue.createApp({
  // data, functions
  // template: "<h2>I am the template</h2>",
  data() {
    return {
      showBooks: true,
      books: [
        { title: "Name of the Wind", author: "Patrick Rothfuss", age: 45 },
        { title: "The Final Empire", author: "Brandon Sanderson", age: 42 },
        { title: "The Hero of Ages", author: "Brandon Sanderson", age: 42 },
      ],
    };
  },
  methods: {
    changeTitle() {
      this.title = "Avengers Endgame";
    },
    toogleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e) {
      console.log(e);
    },
  },
});

app.mount("#app");
