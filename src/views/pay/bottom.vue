<template>
  <!--結帳-->
  <div class="innerwrapper">
    <div class="leftbottom" v-if="$store.state.cart.length == 0">
      <a href="javascript:;" style="color: red">前去添加商品(尚未開發)</a>
    </div>
    <div class="bottomwrapper">
      <div class="bottomprice">
        <span>總&nbsp;價&nbsp;格:&nbsp;{{ all_price }}</span>
      </div>

      <router-link
        replace
        to="/checkout"
        v-if="totalitemnum != 0"
        @click="adjust"
        class="gotobuy"
      >
        <span
          >去&nbsp;買&nbsp;單&nbsp;(共&nbsp;{{ totalitemnum }}&nbsp;件)</span
        ></router-link
      >

      <div v-else class="gotobuy" @click="nothing">
        <span>去買單(共{{ totalitemnum }}件)</span>
      </div>
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
    const totalitemnum = computed(() => {
      let n = 0;
      for (let i = 0; i < store.state.cart.length; i++) {
        if (
          (store.state.cart[i].checked == true) &
          (store.state.cart[i].num > 0)
        ) {
          n += store.state.cart[i].num;
        }
      }
      return n;
    });

    const adjust = function adjust() {
      for (var i = 0; i < store.state.cart.length; i++) {
        if (store.state.cart[i].num == 0) {
          store.state.cart[i].checked = false;
        }
      }
    };

    const nothing = () => {
      alert("您還未選購任何商品");
      console.log(2);
    };

    return { all_price, totalitemnum, nothing, adjust };
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
  padding: 20px;
  background-color: blue;
  cursor: pointer;
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
