<!-- 最上輪波圖 -->
<template>
  <div class="headerwrapper">
    <van-swipe style="height: 200px; width: 600px" :autoplay="5000">
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
</style>
