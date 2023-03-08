<!-- 最上輪波圖 -->
<template>
  <div class="headerwrapper">
    <van-swipe
      :vertical="true"
      :autoplay="3000"
      :boolean="false"
      :touchable="0"
      :indicator-color="none"
      lazy-render
      style="height: 500px; width: 750px; object-fit: fill"
    >
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
      c: "https://thumb.photo-ac.com/8b/8b1d01e24dd3bb82bbfa0592b775ca8d_w.jpeg",
      d: "https://thumb.photo-ac.com/bf/bf14f68ac7823620ce0693760550b5e2_w.jpeg",
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
}
</style>
