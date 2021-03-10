const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      log: []
    }
  },
  methods: {
    attackMonster(e, value) {
      this.currentRound++
      const attackValue = value || getRandomValue(5, 20)
      if (this.monsterHealth - attackValue < 0) {
        this.monsterHealth = 0
      } else {
        this.monsterHealth -= attackValue
      }

      this.attackPlayer()
      this.addLogMessage("player", "attack", attackValue)
    },
    attackPlayer() {
      const attackValue = getRandomValue(10, 30)

      if (this.playerHealth - attackValue < 0) {
        this.playerHealth = 0
      } else {
        this.playerHealth -= attackValue
      }
      this.addLogMessage("monster", "attack", attackValue)
    },
    specialAttack() {
      const attackValue = getRandomValue(20, 40)
      this.attackMonster(null, attackValue)
    },
    healPlayer() {
      this.currentRound++
      const healValue = getRandomValue(10, 20)
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100
      } else {
        this.playerHealth += healValue
      }

      this.attackPlayer()
      this.addLogMessage("player", "heal", healValue)
    },
    startNewGame() {
      this.playerHealth = 100
      this.monsterHealth = 100
      this.winner = null
      this.currentRound = 0
      this.log = []
    },
    surrender() {
      this.winner = "monster"
    },
    addLogMessage(who, what, value) {
      this.log.unshift({ who, what, value })
    }
  },
  computed: {
    monsterBarStyles() {
      return {
        width: `${this.monsterHealth}%`
      }
    },
    playerBarStyles() {
      return {
        width: `${this.playerHealth}%`
      }
    },
    checkSpecialAttackAvailability() {
      return !(this.currentRound > 1 && this.currentRound % 3 === 0)
    },
    canHeal() {
      return !(this.playerHealth < 100)
    }
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw"
      } else if (value <= 0) {
        this.winner = "monster"
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw"
      } else if (value <= 0) {
        this.winner = "player"
      }
    }
  }
})

app.mount("#game")
