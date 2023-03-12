<template>
  <storeHeader class="store-header"></storeHeader>

  <div class="content-wrapper">
    <img :src="$store.state.data.drink[`${n}`].href" />

    <div class="content">
      <div>品名:{{ $store.state.data.drink[`${n}`].cartItem }}</div>
      <div>價格:{{ $store.state.data.drink[`${n}`].price }}</div>
      <div>
        介紹:xxxxxxxxxxxxxxx<br />
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;xxxxxxxxxxxxxx
      </div>

      <div>
        <button
          v-if="storeCartNo.includes($store.state.data.drink[`${n}`].no)"
          class="add-cart add-cart-delete"
          @click="deletdrink($store.state.data.drink[`${n}`].no)"
        >
          刪除商品
        </button>
        <button
          v-else
          @click="adddrink($store.state.data.drink[`${n}`].no)"
          class="add-cart"
        >
          加入購物單
        </button>
      </div>
    </div>
  </div>
  <storeBottom></storeBottom>
</template>
<script>
import storeHeader from "../../components/storeBottom.vue";
import storeBottom from "../../components/storeBottom.vue";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  components: {
    storeHeader,
    storeBottom,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

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
    const n = ref(route.params.no);
    const adddrink = (no) => {
      store.dispatch("Adddrink", no);
    };
    const deletdrink = (no) => {
      store.commit("removepay", no);
    };
    return { n, adddrink, deletdrink, storeCartNo };
  },
};
</script>

<style scoped>
.store-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}

.content-wrapper {
  padding: 300px 0 300px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 28px;
}
.content {
  margin-left: 50px;
  font-size: 28px;
  font-weight: bold;
  line-height: 40px;
}
button {
  margin: 20px 0px 0px 210px;
  padding: 3px 15px;
  border-radius: 10px;
  border: 2px solid grey;
  background: rgb(242, 237, 237);
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  color: red;
}
img {
  max-width: 350px;
  border-radius: 40px;
  border: 2px solid grey;
}

.add-cart {
  cursor: pointer;
  border-radius: 8px;
  background-color: bisque;

  border: 1px solid rgb(46, 45, 45);
}
.add-cart:hover {
  color: red;
}
.add-cart-delete {
  width: 97px;
  background-color: azure;
}
@media (max-width: 870px) {
  .content {
    margin-top: 50px;
  }
}
</style>
