<template>
  <storeHeader class="store-header"></storeHeader>

  <storeBottom></storeBottom>
</template>
<script>
import storeHeader from "../components/storeHeader.vue";
import storeBottom from "../components/storeBottom.vue";
export default {
  name: "App",
  components: {
    storeHeader,
    storeBottom,
  },
  setup() {},
};
</script>
<style scoped>
.store-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}

.top-container {
  background-color: aqua;
  margin: 50px;
  height: 200px;
}
</style>
