<template>
  <div class="item-outerwrapper">
    <div
      v-for="item in $store.state.data.cake"
      :key="item.no"
      class="item-wrapper"
    >
      <img
        :src="item.href"
        style="width: 150px; height: 150px"
        class="item-img"
      />
      <ul class="item">
        <li class="item-name">品名:{{ item.cartItem }}</li>
        <li class="item-price">價格:{{ item.price }}</li>
        <li class="item-bottom">
          <router-link to="" class="item-detail">詳情</router-link>

          <div>
            <button
              v-if="storeCartNo.includes(item.no)"
              class="add-cart add-cart-delete"
              @click="deletcake(item.no)"
            >
              刪除商品
            </button>
            <button v-else @click="addcake(item.no)" class="add-cart">
              加入購物單
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import { reactive } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    //  數組統計購物車所有的商品no

    const storeCartNo = computed(() => {
      let a = [];
      store.state.cart.map(function (element) {
        if (element.no != null) {
          a.push(element.no);
        }
        console.log(a);
      });
      return a;
    });

    const addcake = (no) => {
      store.dispatch("Addcake", no);
    };
    const deletcake = (no) => {
      store.commit("removepay", no);
    };

    return { addcake, deletcake, storeCartNo };
  },
};
</script>
<style scoped>
.item-outerwrapper {
  padding: 20px;
}
.item-wrapper {
  width: 150px;

  margin: 10px;
  padding: 20px;
  background-image: linear-gradient(to top, #130cdf, #0084ff);
  border: 2px solid rgb(232, 219, 219);
  border-radius: 15px 15px 5px 5px;
}
.item-img {
  border: 1px solid grey;
  border-radius: 5px;
}
.item-no,
.item-name,
.item-price {
  margin-bottom: 3px;
  text-align: center;
  margin-top: 6px;
  color: aliceblue;
}
.item-bottom {
  display: flex;
  justify-content: space-around;
}
.item-detail,
.add-cart {
  cursor: pointer;
  border-radius: 8px;
  background-color: azure;
  padding: 3px;
  border: 1px solid rgb(46, 45, 45);
}
.add-cart:hover,
.item-detail:hover {
  color: red;
}
.add-cart-delete {
  background-color: bisque;
}
</style>
