const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
    }
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
    setName(event) {
      this.name = event.target.value
    },
    submitForm(event) {
      console.log(event)
    },
    confirmInput(event) {
      this.confirmedName = this.name
    },
    resetInput(event) {
      this.name = ""
    },
    outputFullname() {}
  },
  computed: {
    fullName() {
      if (this.name) return this.name + " " + "Vergara"

      return ""
    }
  }
})

app.mount("#events")
