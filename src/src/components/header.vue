<template>
  <div class="wrapper">
    <div class="main">
      <!-- <div class="left-content"> -->
      <!-- <div class="icon"> -->
      <!-- <RouterLink to="/" 
        >--><!--<img src="../../img/s.jpg" style="width: 112px" /> -->

      <h2>購物網</h2>
      <!--</RouterLink>-->
      <!-- </div> -->
      <!-- </div> -->
      <!-- <div class="right-content">
        <h1>會員登入(未開發)</h1>
      </div> -->
    </div>

    <!-- steps步驟條 -->
    <div class="cartwrapper">
      <van-steps :active="active" active-icon="success" active-color="#07c160">
        <van-step>購物明細</van-step>
        <van-step>訂單確認</van-step>
        <van-step>訂單完成</van-step>
      </van-steps>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    let active = ref(0);
    switch (route.path) {
      case "/":
        active.value = "0";
        break;
      case "/nopay":
        active.value = "0";
        break;
      case "/checkout":
        active.value = "1";
        console.log(route.path);
        break;
      case "/finish":
        active.value = "2";
        console.log(route.path);
        break;
    }

    return { active };
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
}
.main {
  position: relative;
  width: 90%;
  margin: 30px auto;
  padding-bottom: 10px;

  border-bottom: 2px solid yellowgreen;
}

h2 {
  font-size: 50px;
  color: blue;
  display: block;
}

/* 600以下適用 */
@media (max-width: 600px) {
  h2 {
    text-align: center;
    display: block;
    margin: auto;
  }
}

.cartwrapper {
  width: 90%;
  border: 2px solid black;
  margin: 50px auto;
  background-color: aliceblue;
  border-radius: 15px;
}
.van-steps--horizontal {
  padding: 10px 20px 5px;
  border-radius: 15px;
}
h2:hover {
  color: blue;
}
</style>
