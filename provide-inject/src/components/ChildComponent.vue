<template>
  <div>
    <h2>Child component</h2>
    <grand-child-component></grand-child-component>
  </div>
</template>
<script>
import GrandChildComponent from "./GrandChildComponent.vue";
export default {
  components: {
    "grand-child-component": GrandChildComponent,
  },
};
</script>
<style scoped>
div {
  border: 1px solid blue;
  margin: 1rem;
}
</style>