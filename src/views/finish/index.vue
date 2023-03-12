<template>
  <Header></Header>
  <div class="cart-wrapper-contain">
    <div class="cartwrapper">
      <div class="innerwrapper">
        <div class="middle">
          <h2>已收到您的訂單,正在為您製作</h2>
          <h2>請稍後等待</h2>
          <h2>
            有<span>{{ $store.state.nopay.length }}</span
            >筆商品已存入您的下次再買清單中
          </h2>
          <h2><router-link to="/" style="color: red">回到首頁</router-link></h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import storeBottom from "../../components/storeBottom.vue";
export default {
  components: {
    // storeBottom,
  },
  setup() {},
};
</script>

<style scoped>
.cart-wrapper-contain {
  height: 70vw;
}
.cartwrapper {
  width: 90%;

  border: 2px solid black;
  margin: 50px auto;
  background-color: aliceblue;
  border-radius: 5px;
}
.innerwrapper {
  margin: 100px auto;
  text-align: center;
}
.middle {
  margin: auto;
}
h2 {
  margin-bottom: 20px;
}
h2 span {
  color: red;
}
</style>
