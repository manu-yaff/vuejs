<template>
  <section>
    <form @submit.prevent="submitData">
      <div>
        <label>Username: </label>
        <input type="text" placeholder="Your name" v-model="userData.name" />
      </div>
      <div>
        <label>Age: </label>
        <input type="number" placeholder="Your age" v-model="userData.age" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </section>
</template>
<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      userData: {
        name: "",
        age: undefined,
      },
    };
  },
  methods: {
    submitData() {
      this.$emit("add-user", this.userData);
    },
  },
};
</script>
<style>
form {
  margin: 2rem auto;
}
form div {
  margin: 1rem auto;
}
</style>