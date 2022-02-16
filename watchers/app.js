const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullName: "",
    };
  },
  methods: {
    add() {
      this.counter += 5;
    },
    substract() {
      this.counter -= 5;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = "";
    },
  },
  watch: {
    counter(value) {
      console.log('hola mundo');
      if (value > 50) {
        this.counter = 0;
      }
    },
    name(value) {
      if (value === "") {
        this.fullName = "";
      } else {
        this.fullName = value + " " + "Doe";
      }
    },
  },
});

app.mount("#events");
