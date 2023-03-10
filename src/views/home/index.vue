<template>
  <storeHeader class="store-header"></storeHeader>
  <imgHeaderContainer class="img-header-container"></imgHeaderContainer>
  <h1>堅持提供最好的茶飲,甜點</h1>
  <h1>堅守低糖,低熱量</h1>
  <h1>高品質,低利潤回饋與長期支持的顧客</h1>
  <!-- <div class="middle-container">
    <leftContainer class="left-container"></leftContainer>
    <rightContainer class="right-container"></rightContainer>
  </div> -->

  <storeBottom></storeBottom>
</template>
<script>
import imgHeaderContainer from "./imgHeaderContainer.vue";
// import rightContainer from "./rightContainer.vue";
// import leftContainer from "./leftContainer.vue";

import storeHeader from "../../components/storeHeader.vue";
import storeBottom from "../../components/storeBottom.vue";

export default {
  name: "App",
  components: {
    imgHeaderContainer,
    // rightContainer,
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
  width: 750px;
  display: block;
  padding: 120px 0px 40px;
  margin: 0 auto;
}
/* .top-container {
  background-color: aqua;
  margin: 50px;
  height: 200px;
} */
/* .middle-container {
  flex-wrap: nowrap;
  display: flex;
}
.left-container {
  margin: 0px 10px 0px 20px;
}
.right-container {
  display: flex;
  background-color: gray;
  overflow: hidden;
  margin: 0px 20px 0px 10px;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  border-radius: 20px;
} */
h1 {
  display: block;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin-top: 20px;
}
</style>
