const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course",
      vueLink: "http://google.com"
    }
  },
  methods: {
    outputGoal() {
      const random = Math.random()
      if (random < 0.5) {
        return "Vue 1"
      }

      return "<h1>Master Vue</h1>"
    }
  }
})

app.mount("#user-goal")
