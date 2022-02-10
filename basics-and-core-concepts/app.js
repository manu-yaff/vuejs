const app = Vue.createApp({
  // this means, the value store in data is a function
  data () {
    // anything in the return object can be access in the html
    return {
      courseGoalA: 'Master Vuejs',
      courseGoalB: 'Finish the course',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');