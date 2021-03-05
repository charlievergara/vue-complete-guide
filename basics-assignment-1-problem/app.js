let app = Vue.createApp({
  data() {
    return {
      name: "Carlos Vergara",
      age: 39,
      urlImage:
        "https://i.pinimg.com/originals/15/61/58/1561587aef2154176057c566903f1abe.jpg",
      value: "25"
    }
  },
  methods: {
    plusFive() {
      return this.age + 5
    },
    random() {
      return Math.random()
    }
  }
})

app.mount("#assignment")
