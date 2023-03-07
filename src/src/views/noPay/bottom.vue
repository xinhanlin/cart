<template>
  <!--結帳-->
  <div class="innerwrapper">
    <div class="leftbottom">
      <router-link replace to="/">
        <span style="color: red">返回購物車</span></router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>

<style scoped>
.innerwrapper {
  position: relative;
  height: 175px;
}
.leftbottom {
  position: absolute;
  margin-top: 90px;
  top: 0px;
  font-size: 20px;
}
</style>
