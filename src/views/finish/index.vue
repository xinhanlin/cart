<template>
  <Header></Header>

  <div class="cartwrapper">
    <div class="innerwrapper">
      <div class="middle">
        <div class="finish">訂單已完成</div>

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
export default {
  setup() {},
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
  margin: auto;
  text-align: center;
}
.middle {
  margin: auto;
}
.finish {
  margin-top: 30px;
}
h2 {
  margin-bottom: 20px;
}
</style>
