<template>
  <Header></Header>
  <div class="cartwrapper">
    <div class="innerwrapper">
      <div class="middle">
        <div class="finish">訂單已完成,即刻為您製作</div>
        <br />
        <h2>有{{ $store.state.nopay.length }}項商品已經保存至會員中</h2>
        <router-link
          to="/pay"
          style="display: block; margin: 20px 0px 20px 0px"
        >
          <span style="color: red; font-size: 20px"
            >返回我的購物單</span
          ></router-link
        >
        <router-link to="/" style="display: block; margin: 20px 0px 20px 0px">
          <span style="color: red; font-size: 20px">返回首頁</span></router-link
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
  margin: 100px auto;
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
