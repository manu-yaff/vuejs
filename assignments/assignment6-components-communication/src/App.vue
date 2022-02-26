<template>
  <div>
    <user-data @add-user="addUser"></user-data>
    <active-user :name="user.name" :age="user.age"></active-user>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: 0,
      },
    };
  },
  methods: {
    addUser(userData) {
      this.user = {
        name: userData.name,
        age: userData.age,
      };
    },
  },
};
</script>

<style>
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>