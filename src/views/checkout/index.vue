<template>
  <Header></Header>
  <div class="cartContentWrapper">
    <!--板心-->

    <div class="cartwrapper">
      <div class="allcheckboxwrapper innerwrapper">
        <h2 class="check">
          訂&nbsp;&nbsp;單&nbsp;&nbsp;最&nbsp;&nbsp;後&nbsp;&nbsp;確&nbsp;&nbsp;認
        </h2>
      </div>
      <div class="innerwrapper">
        <div class="topwrapper">
          <h3 class="a">名稱</h3>
          <h3 class="b">價格</h3>
          <h3 class="c">數量</h3>
          <h3 class="d">小計</h3>
        </div>
      </div>

      <div class="innerwrapper">
        <!--item項目-->
        <div
          v-for="item in $store.getters.checkout"
          :key="item.no"
          class="itemwrapper"
        >
          <!--商品明細-->
          <div class="itemdetailwrapper">
            <!-- <div class="check">
              <input
                style="border-bottom: 1px solid yellow"
                type="checkbox"
                :checked="item.checked"
                v-model="item.checked"
              />
            </div> -->
            <div class="imgwrapper">
              <img class="img" :src="item.href" />

              <button class="detail">詳情</button>
            </div>
            <div class="itemname">
              <span>{{ item.cartItem }}</span>
            </div>
          </div>
          <!--價格-->
          <div class="pricewrapper">$&nbsp;{{ item.price }}</div>
          <!--數量-->
          <div class="countwrapper">
            <div>數量:{{ item.num }}</div>
          </div>
          <!--單一項目總價格-->
          <div class="totalpricewrapper">
            <div>
              <span>$&nbsp;{{ item.price * item.num }}</span>
            </div>
          </div>

          <!--項目變更-->
          <!-- <div class="changeitemwrapper">
            <button @click="nopay(item.no)" class="upper">
              <span>下次在購買</span>
            </button>
            <button @click="removepay(item.no)" class="button">
              <span>刪除商品</span>
            </button>
          </div> -->
          <!--結帳-->
        </div>
      </div>
      <Bottom></Bottom>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { reactive, toRefs, computed, onUpdated } from "vue";
import Content from "../../components/content.vue";
import Header from "../../components/header.vue";
import Bottom from "./buttom.vue";

export default {
  components: {
    Header,
    Content,
    Bottom,
  },
  setup() {
    const store = useStore();

    let data = reactive({
      //全選/全不選勾選框的狀態
      all: false,
    });
    function allSelect() {
      if (data.all == false) {
        for (let i = 0; i < store.state.cart.length; i++) {
          store.state.cart[i].checked = true;
        }
      } else {
        for (let i = 0; i < store.state.cart.length; i++) {
          store.state.cart[i].checked = false;
        }
      }
    }
    //全選/全不選的勾選框

    //監測當單一勾選框沒被選,全選變為沒被選
    // watch(,()=>{

    // })
    //單一旅遊價格計算(計算式寫在template中)

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
    const removepay = (item) => {
      store.commit("removepay", item);
    };
    const nopay = (item) => {
      store.commit("nopay", item);
    };

    //查看變動後的數字
    onUpdated(() => {});
    return {
      ...toRefs(data),
      allSelect,
      all_price,
      removepay,
      nopay,
    };
  },
};
</script>
<style scoped>
.cartContentWrapper {
  width: 100%;
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
  text-align: center;
}

/* 訂單確認標題 */
.check {
  margin: 20px auto 20px;
  text-align: center;
  color: blue;
}
.checkbox {
  margin: 30px auto;
}

.topwrapper {
  margin: 0 auto 20px auto;
  display: flex;
  flex-direction: row;
  padding: 20px 0px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  text-align: center;
}
.topwrapper .a {
  flex: 1;
}
.topwrapper .b {
  flex: 1;
}
.topwrapper .c {
  flex: 1;
}
.topwrapper .d {
  flex: 1;
}
/* .topwrapper .e {
  flex: 1;
} */

.itemwrapper {
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  text-align: center;
  padding: 40px 0px 40px 0px;
  border-bottom: 2px solid yellowgreen;
}
.itemwrapper:last-child {
  border-bottom: 2px solid black;
}
/* 商品詳情 */
@media (max-width: 600px) {
  .itemdetailwrapper {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .itemdetailwrapper .itemname {
    flex: 1;
    font-size: 15px;
    margin-top: 10px;
  }
}
.itemdetailwrapper {
  flex: 1;
  display: flex;
  align-items: center;
}
.itemdetailwrapper .check {
  flex: 0.2;
  line-height: 70px;
  margin-right: 3px;
}
.imgwrapper {
  flex: 3;
}
.itemdetailwrapper img {
  height: 80px;
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
  flex: 1;

  font-size: 15px;
}

/* 價格 */
.pricewrapper {
  flex: 1;
}
/* 數量 */
.countwrapper {
  flex: 1;
}
/* 單一項目總價格  */
.totalpricewrapper {
  flex: 1;
}
/* 變更 */
/* .changeitemwrapper {
  flex: 1;
} */
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
/**未添加商品內容區**/
.noitem {
  height: 200px;
  font-size: 40px;
  color: brown;
  font-weight: bold;
}
.noitem > span {
  margin: auto;
}
.leftbottom {
  position: absolute;
  margin-top: 90px;
  top: 0px;
  font-size: 20px;
}
</style>
