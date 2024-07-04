const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: "Name of the Wind",
          author: "Patrick Rothfuss",
          age: 45,
          img: "./assets/01.jpg",
          isFav: false,
        },
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          age: 42,
          img: "./assets/02.jpg",
          isFav: false,
        },
        {
          title: "The Hero of Ages",
          author: "Brandon Sanderson",
          age: 42,
          img: "./assets/03.jpg",
          isFav: false,
        },
      ],
      favBooks: [],
    };
  },
  methods: {
    toogleIsFav(book) {
      book.isFav = !book.isFav;
      if (book.isFav) {
        this.favBooks.push(book);
      } else {
        this.favBooks = this.favBooks.filter((favBook) => favBook !== book);
      }
    },
    toogleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
  computed: {},
});

app.mount("#app");
