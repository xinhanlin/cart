<template>
  <div>
    <Header></Header>
    <Content></Content>
  </div>
</template>
<script>
import Header from "../../components/header.vue";
import Content from "../../components/content.vue";

export default {
  name: "App",
  components: {
    Header,
    Content,
  },
};
</script>
<style scoped></style>
