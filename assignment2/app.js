const app = Vue.createApp({
  data () {
    return {
      message: 'this is an alert',
      userInput: '',
      confirmedInput: ''
    };
  },
  methods: {
    showAlert () {
      alert(this.message);
    },
    setInput (event) {
      this.userInput = event.target.value;
    },
    confirmInput () {
      this.confirmedInput = this.userInput;
    }
  }
});

app.mount("#assignment");