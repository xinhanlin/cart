<template>
  <!--結帳-->
  <div class="innerwrapper">
    <div class="leftbottom">
      <router-link replace to="/">
        <span style="color: red">加購-返回購物車</span></router-link
      >
    </div>
    <div class="bottomwrapper">
      <div class="bottomprice">
        <span>總&nbsp;價&nbsp;格:&nbsp;{{ all_price }}</span>
      </div>

      <router-link replace to="/finish" @click="checkout" class="gotobuy">
        <span
          >結&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;帳</span
        ></router-link
      >
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    //總旅遊總價格計算
    const all_price = computed(() => {
      let a = 0;
      for (let i = 0; i < store.state.cart.length; i++) {
        if (store.state.cart[i].checked == true) {
          a += store.state.cart[i].price * store.state.cart[i].num;
        }
      }
      return a;
    });
    //直接更改購物車, 已經購入的商品;
    const checkout = () => {
      store.state.cart = store.state.cart.filter((item) => {
        return item.checked == false;
      });
    };

    return { all_price, checkout };
  },
};
</script>

<style scoped>
.innerwrapper {
  overflow: hidden;
  position: relative;
}
.leftbottom {
  position: absolute;
  margin-top: 90px;
  top: 0px;
  font-size: 20px;
}
.bottomwrapper {
  width: 250px;
  float: right;
  margin: 30px 0px 0px 30px;
  overflow: hidden;
}

.bottomprice {
  float: right;
}

.bottomprice span {
  color: red;

  font-size: 25px;
  text-decoration: underline;
}
.gotobuy {
  float: right;
  margin: 20px 0px 5px 0px;
  padding: 20px 30px 20px 30px;
  background-color: blue;

  border-radius: 15px 0px 0px 0px;
  border: 4px solid skyblue;
}
.gotobuy span {
  color: aliceblue;
  font-size: 25px;
  font-weight: bold;
}
/**左區塊**/
</style>
