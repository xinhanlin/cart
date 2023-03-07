import { createStore } from "vuex";
export default createStore({
  state: {
    //購物明細
    cart: [
      {
        no: 1,
        cartItem: "商品1",
        href: "https://www.shutterstock.com/image-photo/amazing-beach-sunset-endless-horizon-600w-746217742.jpg",
        price: 111,
        num: 0,
        checked: false,

        total_price: 0,
      },
      {
        no: 2,
        cartItem: "商品2",
        href: "https://www.shutterstock.com/image-photo/foggy-autumn-coniferous-forest-landscape-600w-519406954.jpg",
        price: 222,
        num: 0,
        checked: false,

        total_price: 0,
      },
      {
        no: 3,
        cartItem: "商品3",
        href: "https://www.shutterstock.com/image-photo/winter-mountains-panorama-ski-slopes-600w-361313402.jpg",
        price: 333,
        num: 0,
        checked: false,

        total_price: 0,
      },
      {
        no: 4,
        cartItem: "商品4",
        href: "https://www.shutterstock.com/image-photo/fairy-forest-covered-snow-moon-600w-744558304.jpg",
        price: 333,
        num: 0,
        checked: false,

        total_price: 0,
      },
      {
        no: 5,
        cartItem: "商品5",
        href: "https://www.shutterstock.com/image-photo/cracks-on-surface-blue-ice-600w-655427254.jpg",
        price: 333,
        num: 0,
        checked: false,

        total_price: 0,
      },
      {
        no: 6,
        cartItem: "商品6",
        href: "https://www.shutterstock.com/image-photo/cracks-on-surface-blue-ice-600w-765774259.jpg",
        price: 333,
        num: 0,
        checked: false,

        total_price: 0,
      },
    ],
    //下次在購買清單
    nopay: [],
  },

  getters: {
    //確認結帳的數據
    checkout(state) {
      return state.cart.filter(
        (item) => (item.checked == true) & (item.num != 0)
      );
    },
  },

  mutations: {
    //添加到下次再買清單
    nopay(state, no) {
      state.cart.map(function (item) {
        if (item.no == no) {
          item.checked = false;
          state.nopay.push(item);
        }
      });
      state.cart = state.cart.filter((item) => item.no != no);
    },
    //添加回購物清單
    addcart(state, no) {
      state.nopay.map(function (item) {
        if (item.no == no) {
          item.checked = false;
          state.cart.push(item);
        }
      });
      state.nopay = state.nopay.filter((item) => item.no != no);
    },

    //刪除nopay存儲數據
    removenopay(state, no) {
      state.nopay = state.nopay.filter((item) => item.no != no);
    },
    //刪除pay存儲數據
    removepay(state, no) {
      state.cart = state.cart.filter((item) => item.no != no);
    },
    //   setFilter(state, filter) {
    //     state.filter = filter;
    //   },
    // },
  },
  actions: {},
});
