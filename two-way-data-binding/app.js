const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    add () {
      this.counter++;
    },
    substract () {
      this.counter--;
    },
    setName (event, lastName) {
      this.name = event.target.value;
    },
    resetInput () {
      this.name = '';
    },
    outputFullName () {
      console.log('recalculating');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Doe';
    }
  }
});

app.mount('#events');
