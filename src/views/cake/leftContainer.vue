<template>
  <div class="leftContainer"></div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const active = ref(2);

    return { active };
  },
};
</script>
<style scoped>
.leftContainer {
  width: 96px;
  height: 198px;

  border-radius: 4px;
}
.leftitem {
  margin: 8px;
  border-radius: 4px;
}
</style>
