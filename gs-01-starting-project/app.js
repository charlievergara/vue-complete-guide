Vue.createApp({
  data() {
    return {
      goals: [],
      value: ""
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.value)
      this.value = ""
    }
  }
}).mount("#app")

/*const button = document.querySelector("button")
const input = document.querySelector("input")
const list = document.querySelector("ul")

function addGoal(e) {
  const value = input.value
  const li = document.createElement("li")
  li.textContent = value
  list.appendChild(li)

  input.value = ""
}

button.addEventListener("click", addGoal)
*/
