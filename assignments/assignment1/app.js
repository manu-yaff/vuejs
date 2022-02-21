const app = Vue.createApp({
  data() {
    return {
      user: {
        name: 'Robert',
        age: 20,
      },
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'
    }
  },
  methods: {
    getRandomNumber() {
      return Math.floor(Math.random() * 10)
    },
  },
})

app.mount('#app')
