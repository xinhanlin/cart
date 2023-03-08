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
          <button @click="addcake(item.no)" class="add-cart">加入購物單</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import { reactive } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const addcake = (no) => {
      store.commit("addcake", no);
    };
    return { addcake };
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
  background: white;
  border: 1px solid brown;
  border-radius: 5px;
}
.item-img {
  border: 1px solid grey;
  border-radius: 15px;
}
.item-no,
.item-name,
.item-price {
  margin-bottom: 3px;
  text-align: center;
  margin-top: 6px;
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
</style>
