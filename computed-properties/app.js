const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullName () {
      console.log('Recalculating');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Doe';
    }
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
    }
  }
});

app.mount('#events');
