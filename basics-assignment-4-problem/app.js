const app = Vue.createApp({
  data() {
    return {
      value: "",
      displayed: true,
      activeColor: ""
    }
  },
  methods: {
    onClick() {
      this.displayed = !this.displayed
    }
  }
})

app.mount("#assignment")
