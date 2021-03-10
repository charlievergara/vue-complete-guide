const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      taskList: [],
      visible: false,
      toggleLabel: "Show List"
    }
  },
  methods: {
    addTask() {
      this.taskList.push(this.inputValue)
      this.inputValue = ""
      this.visible = true
      this.renderToggleLabel()
    },
    toggle() {
      this.visible = !this.visible
      this.renderToggleLabel()
    },
    renderToggleLabel() {
      console.log(this.visible)
      if (this.visible === true) {
        this.toggleLabel = "Hide"
      } else {
        this.toggleLabel = "Show List"
      }
    }
  }
})
app.mount("#assignment")
