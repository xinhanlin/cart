<!-- 最上輪波圖 -->
<template>
  <div class="headerwrapper">
    <van-swipe
      style="height: 200px; width: 600px"
      :autoplay="3000"
      :boolean="false"
      :touchable="false"
    >
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
  margin: auto;
}
</style>
