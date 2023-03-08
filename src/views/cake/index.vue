<template>
  <storeHeader class="store-header"></storeHeader>
  <imgHeaderContainer class="img-header-container"></imgHeaderContainer>
  <div class="middle-container">
    <!-- <leftContainer class="left-container"></leftContainer> -->
    <rightContainer class="right-container"></rightContainer>
  </div>
  <storeBottom></storeBottom>
</template>
<script>
import imgHeaderContainer from "./imgHeaderContainer.vue";
import rightContainer from "./rightContainer.vue";
// import leftContainer from "./leftContainer.vue";
import storeHeader from "../../components/storeHeader.vue";
import storeBottom from "../../components/storeBottom.vue";
export default {
  name: "App",
  components: {
    imgHeaderContainer,
    rightContainer,
    // leftContainer,
    storeHeader,
    storeBottom,
  },
};
</script>
<style scoped>
.store-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
.img-header-container {
  padding: 100px 0px 40px;
}

.middle-container {
  flex-wrap: nowrap;
  display: flex;
}
.left-container {
  margin: 0px 10px 0px 20px;
}
.right-container {
  display: flex;
  flex-grow: 1;

  overflow: hidden;
  margin: 0px 20px 0px 10px;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  border-radius: 20px;
}
</style>
