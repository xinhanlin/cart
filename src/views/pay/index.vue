<template>
  <Header></Header>
  <Content></Content>
  <div class="cartContentWrapper">
    <!--板心-->

    <div class="cartwrapper">
      <!--全選/非選選框-->
      <div class="allcheckboxwrapper innerwrapper">
        <h2 class="check">購&nbsp;&nbsp;物&nbsp;&nbsp;清&nbsp;&nbsp;單</h2>
      </div>

      <div class="innerwrapper">
        <div class="topwrapper">
          <h3 class="a">商品明細</h3>
          <h3 class="b">價格</h3>
          <h3 class="c">數量</h3>
          <h3 class="d">小計</h3>
          <h3 class="e">變更</h3>
        </div>
      </div>

      <div class="innerwrapper">
        <!--item項目-->
        <div
          class="allcheckboxwrapper innerwrapper"
          v-if="$store.state.cart.length != 0"
        >
          <input
            style="zoom: 150%"
            type="checkbox"
            @click="allSelect"
            v-model="allchecked"
            class="checkbox"
          />
          &nbsp;全&nbsp;選&nbsp;/全&nbsp;不&nbsp;選
        </div>
        <div
          v-for="item in $store.state.cart"
          :key="item.no"
          class="itemwrapper"
        >
          <!--商品明細-->
          <div class="itemdetailwrapper">
            <div class="check">
              <input
                style="zoom: 150%"
                type="checkbox"
                :checked="item.checked"
                v-model="item.checked"
              />
            </div>

            <div class="imgwrapper">
              <img class="img" :src="item.href" />

              <router-link
                :to="item.no < 20 ? `/cake/${item.id}` : `/drink/${item.id}`"
                class="itemdetail"
                >詳情</router-link
              >
            </div>
            <div class="itemname">
              <span>{{ item.cartItem }}</span>
            </div>
          </div>
          <!--價格-->
          <div class="pricewrapper">價格:$&nbsp;{{ item.price }}</div>
          <!--數量-->
          <div class="countwrapper">
            <div>
              數量:<van-stepper
                v-model="item.num"
                min="1"
                max="999"
                style="border: 1px solid black"
              />
            </div>
          </div>
          <!--單一項目總價格-->
          <div class="totalpricewrapper">
            <div>
              <span>小計:$&nbsp;{{ item.price * item.num }}</span>
            </div>
          </div>
          <!--項目變更-->
          <div class="changeitemwrapper">
            <button @click="nopay(item.no)" class="upper">
              <span>加入下次再買清單</span>
            </button>
            <button @click="removepay(item.no)" class="button">
              <span>刪除商品</span>
            </button>
          </div>
        </div>
      </div>

      <Bottom></Bottom>
    </div>
  </div>
  <storeBottom></storeBottom>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import Header from "../../components/content.vue";
import Content from "../../components/header.vue";
import Bottom from "./bottom.vue";
import storeBottom from "../../components/storeBottom.vue";
export default {
  components: {
    Header,
    Content,
    Bottom,
    storeBottom,
  },
  setup() {
    const store = useStore();

    const allchecked = computed({
      get: () => {
        return store.state.cart.every((item) => {
          return item.checked == true;
        });
        // let a = true;
        // store.state.cart.map(function (element) {
        //   if (element.checked == false) {
        //     a = false;
        //   }
        // });
        // return a;
      },
      set: (value) => {
        store.state.cart.forEach((element) => {
          element.checked = value;
        });
      },
    });

    // 全選/全不選的勾選框
    // function allSelect() {
    //   if (allchecked == true) {
    //     for (let i = 0; i < store.state.cart.length; i++) {
    //       store.state.cart[i].checked = true;
    //     }
    //   } else {
    //     for (let i = 0; i < store.state.cart.length; i++) {
    //       store.state.cart[i].checked = false;
    //     }
    //   }
    // }
    //

    //監測當單一勾選框沒被選,全選變為沒被選
    // watch(,()=>{

    // })
    //單一旅遊價格計算(計算式寫在template中)

    //總旅遊總價格計算
    // const all_price = computed(() => {
    //   let a = 0;
    //   for (let i = 0; i < store.state.cart.length; i++) {
    //     if (store.state.cart[i].checked == true) {
    //       a += store.state.cart[i].price * store.state.cart[i].num;
    //     }
    //   }
    //   return a;
    // });

    const removepay = (item) => {
      store.commit("removepay", item);
    };
    //訂購單加入我的下次再買清單
    const nopay = (item) => {
      store.dispatch("Nopay", item);
    };

    return {
      allchecked,
      // allSelect,

      removepay,
      nopay,
    };
  },
};
</script>
<style scoped>
.cartContentWrapper {
  width: 100%;
  height: 100%;
  font-size: 15px;
}
.cartwrapper {
  width: 90%;
  border: 2px solid black;
  margin: 50px auto;
  background-color: aliceblue;
  border-radius: 5px;
}
.innerwrapper {
  width: 95%;
  margin: auto;
}
.allcheckboxwrapper {
  font-weight: bold;
  font-size: 15px;
}
.allcheckboxwrapper :hover {
  cursor: pointer;
}

/* 訂單確認標題 */
.check {
  text-align: center;
  color: blue;
  margin: 20px auto 20px;
}
.check input:hover {
  cursor: pointer;
}
.checkbox {
  margin: 30px auto;
}

.topwrapper {
  margin: 0 auto 20px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 20px 0px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  text-align: center;
}
/* 600以下適用 */
@media (max-width: 600px) {
  .topwrapper,
  .itemwrapper {
    flex-wrap: wrap;
  }

  .a,
  .b,
  .c,
  .itemdetailwrapper,
  .pricewrapper,
  .countwrapper {
    flex-basis: 33%;
  }

  .d,
  .e,
  .totalpricewrapper,
  .changeitemwrapper {
    flex-basis: 50%;
  }
  .itemdetailwrapper .detail:hover {
    color: black;
    cursor: pointer;
  }
  .itemname {
    margin-top: 20px;
  }
}

.topwrapper .a {
  flex-grow: 2;
}
.topwrapper .b {
  flex-grow: 1;
}
.topwrapper .c {
  flex-grow: 1;
}
.topwrapper .d {
  flex-grow: 1;
}
.topwrapper .e {
  flex-grow: 1;
}

.itemwrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  text-align: center;
  padding: 40px 0px 40px 0px;
  border-bottom: 2px solid yellowgreen;
  /* flex-wrap: nowrap; */
}
.itemwrapper:last-child {
  border-bottom: 2px solid black;
}
/* 商品詳情 */

.itemdetailwrapper {
  flex-grow: 2;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-width: 20px;
  flex-wrap: wrap;
}
.itemdetailwrapper .check {
  flex-grow: 0.2;
  line-height: 70px;
  margin-right: 3px;
}
.imgwrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 3;
}
.imgwrapper .itemdetail {
  width: 40px;
  margin: 8px auto 0px;
  border-radius: 10px;
  background-color: gainsboro;
  border: 1px solid gray;
}
.itemdetailwrapper img {
  display: block;
  margin: auto;
  height: 100px;
  width: 100px;
  object-fit: cover;
}
.itemdetailwrapper .detail {
  display: block;
  margin: auto;
  line-height: 20px;
  height: 20px;
  border: 2px solid grey;
  border-radius: 5px;
}
.itemdetailwrapper .detail:hover {
  color: red;
  cursor: pointer;
}
.itemdetailwrapper .itemname {
  flex-grow: 3;
  flex-wrap: wrap;
  line-height: 20px;

  font-size: 20px;
}

/* 價格 */
.pricewrapper {
  flex-grow: 1;
}
/* 數量 */
.countwrapper {
  flex-grow: 1;
}
/* 單一項目總價格 */
.totalpricewrapper {
  flex-grow: 1;
}
/* 變更 */
.changeitemwrapper {
  flex-grow: 1;
}
.changeitemwrapper > button {
  display: block;
  margin: 5px auto 5px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 15px;
}
.changeitemwrapper > button:hover {
  color: red;
  cursor: pointer;
}
</style>
