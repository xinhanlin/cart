<template>
  <storeHeader class="store-header"></storeHeader>
  <imgHeaderContainer class="img-header-container"></imgHeaderContainer>
  <div class="title">甜品</div>
  <div class="middle-container">
    <!-- <leftContainer class="left-container"></leftContainer> -->
    <rightContainer class="right-container"></rightContainer>
  </div>
  <storeBottom class="store-bottom"> </storeBottom>
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
  width: 100%;
  padding: 40px 0px 40px;
  margin-top: 59px;

  background-image: linear-gradient(to top, rgb(0, 0, 255), rgb(31, 31, 185));
  border-bottom: 2px yellowgreen solid;
}
.title {
  width: 100%;
  margin: 40px auto 20px;
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  color: brown;
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
.store-bottom {
  border-top: 2px solid yellowgreen;
}
</style>
