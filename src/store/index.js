import { createStore } from "vuex";
export default createStore({
  state: {
    //購物明細
    data: {
      cake: [
        {
          id: 0,
          no: 1,
          cartItem: "寶貝卡斯泰拉",
          href: "https://thumb.photo-ac.com/cb/cb714e2d08ad72857ee4ccebcd6e32d2_w.jpeg",
          price: 222,
          num: 0,
          checked: false,

          total_price: 0,
        },
        {
          id: 1,
          no: 2,
          cartItem: "藍莓千層餅",
          href: "https://thumb.photo-ac.com/5f/5f9c5abc1211aef45fa71e15615f0b64_w.jpeg",
          price: 222,
          num: 0,
          checked: false,

          total_price: 0,
        },
        {
          id: 2,
          no: 3,
          cartItem: "卡納蕾",
          href: "https://thumb.photo-ac.com/56/56fe6574a01232468b442b31f8cf6fb4_w.jpeg",
          price: 222,
          num: 0,
          checked: false,

          total_price: 0,
        },
        {
          id: 3,
          no: 4,
          cartItem: "藍莓蛋糕",
          href: "https://thumb.photo-ac.com/7c/7c40dbec7893ecd043abbe08cabb1e2c_w.jpeg",
          price: 222,
          num: 0,
          checked: false,

          total_price: 0,
        },
        {
          id: 4,
          no: 5,
          cartItem: "巧克力香蕉凍糕",
          href: "https://thumb.photo-ac.com/19/19f384f352a0d54495e6207de71033c6_w.jpeg",
          price: 222,
          num: 0,
          checked: false,

          total_price: 0,
        },
        {
          id: 5,
          no: 6,
          cartItem: "巧克力蛋糕",
          href: "https://thumb.photo-ac.com/0c/0c696a89e7def956324657e18f96fe40_w.jpeg",
          price: 222,
          num: 0,
          checked: false,

          total_price: 0,
        },
        {
          id: 6,
          no: 7,
          cartItem: "小奶油泡芙",
          href: "https://thumb.photo-ac.com/73/735f134c83449e0e479a9e04726c436b_w.jpeg",
          price: 222,
          num: 0,
          checked: false,

          total_price: 0,
        },
        {
          id: 7,
          no: 8,
          cartItem: "時尚卡內萊 ",
          href: "https://thumb.photo-ac.com/3b/3b0db451d40f6b6dc137f5895644caab_w.jpeg",
          price: 222,
          num: 0,
          checked: false,

          total_price: 0,
        },
        {
          id: 8,
          no: 9,
          cartItem: "芝士蛋糕",
          href: "https://thumb.photo-ac.com/dc/dc5c1d14263b92df0605819a39b2f49c_w.jpeg",
          price: 222,
          num: 0,
          checked: false,

          total_price: 0,
        },
        {
          id: 9,
          no: 10,
          cartItem: "草莓慕斯",
          href: "https://thumb.photo-ac.com/5f/5f80ed53df6474b6ad18c9ed4cb62e9f_w.jpeg",
          price: 222,
          num: 0,
          checked: false,

          total_price: 0,
        },
        {
          id: 10,
          no: 11,
          cartItem: "勃朗峰",
          href: "https://thumb.photo-ac.com/14/147e4ff9a79fb263d062b48f0a425912_w.jpeg",
          price: 222,
          num: 0,
          checked: false,

          total_price: 0,
        },
        {
          id: 11,
          no: 12,
          cartItem: "薩赫托特",
          href: "https://thumb.photo-ac.com/dc/dc823449c2d69a153dfc389391845ee8_w.jpeg",
          price: 222,
          num: 0,
          checked: false,

          total_price: 0,
        },
        {
          id: 12,
          no: 13,
          cartItem: "烤蘋果",
          href: "https://thumb.photo-ac.com/99/9961ad89391344ad61a4ee8afc480b61_w.jpeg",
          price: 222,
          num: 0,
          checked: false,

          total_price: 0,
        },
        {
          id: 13,
          no: 14,
          cartItem: "鱷魚灌木叢",
          href: "https://thumb.photo-ac.com/47/478afd8bc8f92b3ab0aa7c5b42b368f2_w.jpeg",
          price: 222,
          num: 0,
          checked: false,

          total_price: 0,
        },
        {
          id: 14,
          no: 15,
          cartItem: "蛋撻",
          href: "https://thumb.photo-ac.com/41/41cf317156bf8fe823345863ce095609_w.jpeg",
          price: 222,
          num: 0,
          checked: false,

          total_price: 0,
        },
        {
          id: 15,
          no: 16,
          cartItem: "大蒙布朗",
          href: "https://thumb.photo-ac.com/85/85d22fe7d11e45932e152080231068ab_w.jpeg",
          price: 222,
          num: 0,
          checked: false,

          total_price: 0,
        },
      ],
      drink: [
        {
          id: 0,
          no: 21,
          cartItem: "冷凍雞尾酒",
          href: "https://thumb.photo-ac.com/ac/ac51ddbb0db82a544a474c50b1181f48_w.jpeg",
          price: 111,
          num: 0,
          checked: false,
          total_price: 0,
        },
        {
          id: 1,
          no: 22,
          cartItem: "牛奶",
          href: "https://thumb.photo-ac.com/23/239d2c3b6838b13dd3645b8d93a39c7f_w.jpeg",
          price: 111,
          num: 0,
          checked: false,
          total_price: 0,
        },
        {
          id: 2,
          no: 23,
          cartItem: "大麥茶",
          href: "https://thumb.photo-ac.com/b2/b213856099ab39c3b7fe10bdebfdf308_w.jpeg",
          price: 111,
          num: 0,
          checked: false,
          total_price: 0,
        },
        {
          id: 3,
          no: 24,
          cartItem: "甜瓜蘇打水",
          href: "https://thumb.photo-ac.com/e0/e06925ac3e495923794818f342454b39_w.jpeg",
          price: 111,
          num: 0,
          checked: false,
          total_price: 0,
        },
        {
          id: 4,
          no: 25,
          cartItem: "混合漿果冰沙",
          href: "https://thumb.photo-ac.com/fe/fea4e27a4cf69fc3a3a8959eb48177af_w.jpeg",
          price: 111,
          num: 0,
          checked: false,
          total_price: 0,
        },
        {
          id: 5,
          no: 26,
          cartItem: "橙汁",
          href: "https://thumb.photo-ac.com/2f/2fae1c2a2f2ce67a30b3fb7fb7875f7b_w.jpeg",
          price: 111,
          num: 0,
          checked: false,
          total_price: 0,
        },
        {
          id: 6,
          no: 27,
          cartItem: "檸檬汽水",
          href: "https://thumb.photo-ac.com/a7/a77ca9c28890f57faf9f4508289fe237_w.jpeg",
          price: 111,
          num: 0,
          checked: false,
          total_price: 0,
        },
        {
          id: 7,
          no: 28,
          cartItem: "七彩蘇打水",
          href: "https://thumb.photo-ac.com/54/54656ebd99ebd784a59d9d3f70a1b06b_w.jpeg",
          price: 111,
          num: 0,
          checked: false,
          total_price: 0,
        },
        {
          id: 8,
          no: 29,
          cartItem: "熊的拿鐵藝術",
          href: "https://thumb.photo-ac.com/1f/1f677d7a3658ffeed85810a56dc3d971_w.jpeg",
          price: 111,
          num: 0,
          checked: false,
          total_price: 0,
        },
        {
          id: 9,
          no: 30,
          cartItem: "維納咖啡",
          href: "https://thumb.photo-ac.com/cb/cbc387921658f8ad71ca64536a54a219_w.jpeg",
          price: 111,
          num: 0,
          checked: false,
          total_price: 0,
        },
        {
          id: 10,
          no: 31,
          cartItem: "達爾戈納咖啡",
          href: "https://thumb.photo-ac.com/cf/cf7d597bc3317321aeeb161b6cd840ec_w.jpeg",
          price: 111,
          num: 0,
          checked: false,
          total_price: 0,
        },
        {
          id: 11,
          no: 32,
          cartItem: "拿鐵咖啡",
          href: "https://thumb.photo-ac.com/69/69c3d71d5df64f9cee9a28f9a58637b3_w.jpeg",
          price: 111,
          num: 0,
          checked: false,
          total_price: 0,
        },
        {
          id: 12,
          no: 33,
          cartItem: "濃縮咖啡",
          href: "https://thumb.photo-ac.com/71/715129c723935281cc1b0a7c783ff1ea_w.jpeg",
          price: 111,
          num: 0,
          checked: false,
          total_price: 0,
        },
        {
          id: 13,
          no: 34,
          cartItem: "檸檬咖啡",
          href: "https://thumb.photo-ac.com/3f/3fcf24e7b2687826aa58192c0bcbfeea_w.jpeg",
          price: 111,
          num: 0,
          checked: false,
          total_price: 0,
        },
        {
          id: 14,
          no: 35,
          cartItem: "滴漏袋咖啡",
          href: "https://thumb.photo-ac.com/66/66b647f1f2409521368b343be2cd4bce_w.jpeg",
          price: 111,
          num: 0,
          checked: false,
          total_price: 0,
        },
        {
          id: 15,
          no: 36,
          cartItem: "芒果拉西",
          href: "https://thumb.photo-ac.com/1e/1e74bd9bc8f2cf8774fbf76a0308e7bd_w.jpeg",
          price: 111,
          num: 0,
          checked: false,
          total_price: 0,
        },
      ],
      img: {
        a: "https://thumb.photo-ac.com/22/22a649752dbf82e2f1b4395a55f27d2d_w.jpeg",
        b: "https://thumb.photo-ac.com/db/dbd200db40d2e77a21610ff89fc74d1b_w.jpeg",
        c: "https://thumb.photo-ac.com/8b/8b1d01e24dd3bb82bbfa0592b775ca8d_w.jpeg",
        d: "https://thumb.photo-ac.com/bf/bf14f68ac7823620ce0693760550b5e2_w.jpeg",
      },
    },
    cart: [],
    //下次在購買清單
    nopay: [],
  },

  getters: {
    //確認結帳的數據
    checkout: function (state) {
      return state.cart.filter(
        (item) => (item.checked == true) & (item.num != 0)
      );
    },
  },

  mutations: {
    //添加到cart(購物車)數組

    addcake(state, no) {
      state.data.cake.map(function (item) {
        if (item.no == no) {
          item.checked = true;
          item.num = 1;
          state.cart.push(item);
        }
      });
    },
    adddrink(state, no) {
      state.data.drink.map(function (item) {
        if (item.no == no) {
          item.checked = true;
          item.num = 1;
          state.cart.push(item);
        }
      });
    },

    //顯示商品詳情

    //添加到下次再買清單
    nopay(state, no) {
      state.cart.map(function (item) {
        if (item.no == no) {
          // item.checked = false;

          state.nopay.push(item);
        }
      });
      // state.cart = state.cart.filter((item) => item.no != no);
    },
    //添加至購物清單
    addcart(state, no) {
      state.nopay.map(function (item) {
        if (item.no == no) {
          item.checked = true;
          item.num = 1;
          state.cart.push(item);
        }
      });
      //可以刪除商品,並加回購物單
      // state.nopay = state.nopay.filter((item) => item.no != no);
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
  actions: {
    Nopay(context, no) {
      if (context.state.nopay == false) {
        context.commit("nopay", no);
      } else {
        var a = true;
        for (let i = 0; i < context.state.nopay.length; i++) {
          if (context.state.nopay[i].no == no) {
            a = false;
            alert("下次再買清單已經存儲相同商品");
          }
        }
        if (a == true) {
          context.commit("nopay", no);
        }
      }
    },
    Addcart(context, no) {
      if (context.state.cart == false) {
        context.commit("addcart", no);
      } else {
        var a = true;
        for (let i = 0; i < context.state.cart.length; i++) {
          if (context.state.cart[i].no == no) {
            a = false;
            alert("下次再買清單已經存儲相同商品");
          }
        }
        if (a == true) {
          context.commit("addcart", no);
        }
      }
    },
    Addcake(context, no) {
      if (context.state.cart == false) {
        context.commit("addcake", no);
      } else {
        var a = true;
        for (let i = 0; i < context.state.cart.length; i++) {
          if (context.state.cart[i].no == no) {
            a = false;
            alert("購物單已經存放相同商品");
          }
        }
        if (a == true) {
          context.commit("addcake", no);
        }
      }
    },
    Adddrink(context, no) {
      console.log(context.state.cart);
      if (context.state.cart == false) {
        context.commit("adddrink", no);
      } else {
        var a = true;
        for (let i = 0; i < context.state.cart.length; i++) {
          if (context.state.cart[i].no == no) {
            a = false;
            alert("購物單已經存放相同商品");
          }
        }
        if (a == true) {
          context.commit("adddrink", no);
        }
      }
    },
  },
});
