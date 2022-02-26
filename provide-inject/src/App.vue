<template>
  <div>
    <h1>Root element</h1>
    <child-component></child-component>
  </div>
</template>

<script>
import ChildComponent from "./components/ChildComponent.vue";
export default {
  components: {
    ChildComponent,
  },
  provide() {
    return {
      message: "hello message from the root",
      sendMessage: this.sendMessage,
    };
  },
  methods: {
    sendMessage() {
      alert(
        "This message is on the root component, but was emitted from the grandhild"
      );
    },
  },
};
</script>
<style scoped>
div {
  border: 1px solid salmon;
}
</style>
