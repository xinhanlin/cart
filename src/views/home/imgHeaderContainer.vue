<!-- 最上輪波圖 -->
<template>
  <div class="headerwrapper">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="(item, index) in img" :key="index">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    const img = reactive({
      a: "https://thumb.photo-ac.com/22/22a649752dbf82e2f1b4395a55f27d2d_w.jpeg",
      b: "https://thumb.photo-ac.com/db/dbd200db40d2e77a21610ff89fc74d1b_w.jpeg",
      c: "https://thumb.photo-ac.com/bf/bf14f68ac7823620ce0693760550b5e2_w.jpeg",
    });
    return {
      img,
    };
  },
};
</script>

<style scoped>
.headerwrapper {
  margin: auto;
  width: 750px;
}
.van-swipe .van-swipe-item {
  margin: auto;
  height: 100%;
  width: 750px;
}
img {
  display: inline-block;
  height: 100%;
  width: 750px;
}

@media (max-width: 600px) {
  .headerwrapper {
    width: 500px;
  }
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
  .headerwrapper {
    width: 400px;
  }
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
  .headerwrapper {
    width: 300px;
  }
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
  .headerwrapper {
    width: 200px;
  }
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
@media (max-width: 200px) {
  .headerwrapper {
    width: 150px;
  }
  .van-swipe .van-swipe-item {
    height: 100%;
    width: 150px;
  }
  img {
    display: inline-block;
    height: 100%;
    width: 150px;
  }
}
</style>
