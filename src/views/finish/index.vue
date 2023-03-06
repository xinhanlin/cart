<template>
  <Header></Header>

  <div class="cartwrapper">
    <div class="innerwrapper" style="margin-bottom: 400px">
      <div class="middle">
        <br />
        <div>謝謝您的購買</div>
        <br />
        <img src="../../../img/s.jpg" style="width: 100px" />

        <router-link
          replace
          to="/"
          style="display: block; margin: 20px 0px 20px 0px"
        >
          <h2>我的購物車尚有{{ $store.state.cart.length }}項商品</h2>
          <h2>下次在買清單尚有{{ $store.state.nopay.length }}項商品</h2>
          <span style="color: red; font-size: 20px"
            >返回我的購物車</span
          ></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
  },
};
</script>

<style scoped>
.cartwrapper {
  width: 90%;
  border: 2px solid black;
  margin: 50px auto;
  background-color: aliceblue;
  border-radius: 5px;
}
.innerwrapper {
  width: 95%;
  margin: auto;
  text-align: center;
}
.middle {
  width: 560px;
  margin: auto;
}
</style>
