<template>
  <div>
    <div v-show="n < 21">
      <storeHeader></storeHeader>
      <img :src="$store.state.data.cake[`${n}`].href" />
      <div class="">品名:{{ $store.state.data.cake[`${n}`].cartItem }}</div>
      <div class="">價格:{{ $store.state.data.cake[`${n}`].price }}</div>
      <div class="">介紹</div>
      <button @click="addcake(item.no)">加入購物單</button>

      <storeBottom></storeBottom>
    </div>
    <div>
      <storeHeader></storeHeader>
      <img :src="$store.state.data.drink[`${n}`].href" />
      <div class="">品名:{{ $store.state.data.drink[`${n}`].cartItem }}</div>
      <div class="">價格:{{ $store.state.data.drink[`${n}`].price }}</div>
      <div class="">介紹</div>
      <button @click="adddrink(item.no)">加入購物單</button>

      <storeBottom></storeBottom>
    </div>
  </div>
</template>
<script>
import storeHeader from "../../components/storeBottom.vue";
import storeBottom from "../../components/storeBottom.vue";
import { ref } from "vue";
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
    let no = route.path.slice("1");
    console.log(no);
    console.log(route.path);
    console.log(store.state.data.drink[3]);
    const n = ref(no);
    return { n };
  },
};
</script>

<style></style>
