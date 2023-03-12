<!-- 最上輪波圖 -->
<template>
  <div class="headerwrapper">
    <van-swipe :autoplay="5000">
      <van-swipe-item v-for="item in $store.state.data.img" :key="item.no">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>

<style scoped>
.headerwrapper {
  width: 600px;
}
.van-swipe {
  margin: auto;
  border-radius: 10px 10px 0px 0px;
}
.headerwrapper {
  margin: auto;
}
.van-swipe .van-swipe-item {
  height: 100%;
  width: 500px;
  color: #fff;
  font-size: 20px;
  text-align: center;
}
img {
  display: inline-block;
  height: 100%;
  width: 500px;
}
@media (max-width: 900px) {
  .van-swipe .van-swipe-item {
    height: 100%;
    width: 800px;
  }
  img {
    display: inline-block;
    height: 100%;
    width: 800px;
  }
}
@media (max-width: 800px) {
  .van-swipe .van-swipe-item {
    height: 100%;
    width: 700px;
  }
  img {
    display: inline-block;
    height: 100%;
    width: 700px;
  }
}
@media (max-width: 700px) {
  .van-swipe .van-swipe-item {
    height: 100%;
    width: 600px;
  }
  img {
    display: inline-block;
    height: 100%;
    width: 600px;
  }
}
@media (max-width: 600px) {
  .van-swipe .van-swipe-item {
    height: 100%;
    width: 500px;
  }
  img {
    display: inline-block;
    height: 100%;
    width: 500px;
  }
}
@media (max-width: 500px) {
  .van-swipe .van-swipe-item {
    height: 100%;
    width: 400px;
  }
  img {
    display: inline-block;
    height: 100%;
    width: 400px;
  }
}
@media (max-width: 400px) {
  .van-swipe .van-swipe-item {
    height: 100%;
    width: 300px;
  }
  img {
    display: inline-block;
    height: 100%;
    width: 300px;
  }
}
@media (max-width: 300px) {
  .van-swipe .van-swipe-item {
    height: 100%;
    width: 200px;
  }
  img {
    display: inline-block;
    height: 100%;
    width: 200px;
  }
}
</style>
