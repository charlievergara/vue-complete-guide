let app = Vue.createApp({
  data() {
    return {
      firstInput: "",
      secondInput: ""
    }
  },
  methods: {
    showAlert() {
      alert("here I am")
    },
    saveFirstInput(event) {
      this.firstInput = event.target.value
    },
    saveSecondInput(event) {
      this.secondInput = event.target.value
    }
  }
})

app.mount("#assignment")
