const app = Vue.createApp({
  data() {
    return {
      myNumber: 0
    }
  },
  methods: {
    onAdd(value) {
      this.myNumber += value
    }
  },
  computed: {
    result() {
      if (this.myNumber < 37) {
        return "Not yet there"
      } else if (this.myNumber === 37) {
        return this.myNumber
      } else {
        return "Too much!"
      }
    }
  },
  watch: {
    result(value) {
      setTimeout(() => {
        this.myNumber = 0
      }, 5000)
    }
  }
})

app.mount("#assignment")
