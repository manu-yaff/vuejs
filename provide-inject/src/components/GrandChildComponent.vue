<template>
  <div>
    <h2>Grand child component</h2>
    <p>
      This is a message from the root element with provide/inject: {{ message }}
    </p>
    <button @click="sendMessage">Send message to root component</button>
  </div>
</template>
<script>
export default {
  inject: ["message", "sendMessage"],
};
</script>
<style scoped>
div {
  border: 1px solid green;
}
</style>