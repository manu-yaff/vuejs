<template>
  <section>
    <h2>Username: {{ name }}</h2>
    <h3>Age: {{ age === 0 ? "" : age }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>