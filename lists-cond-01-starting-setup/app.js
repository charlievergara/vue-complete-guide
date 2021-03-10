const app = Vue.createApp({
  data() {
    return {
      inputGoal: "",
      goals: [],
      obj: { name: "Carlos", lastName: "Vergara" }
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.inputGoal)
    },
    onClickListItem(index) {
      this.goals.splice(index, 1)
    }
  }
})

app.mount("#user-goals")
