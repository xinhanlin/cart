<template>
  <div class="storeheader">
    <div class="middlewrapper">
      <div class="logo">logo</div>
      <ul>
        <li><router-link to="/">主頁</router-link></li>
        <li><router-link to="/drink">飲料</router-link></li>
        <li><router-link to="/cake">甜品</router-link></li>

        <!-- <li><router-link to="/about">About</router-link></li> -->
        <li>
          <router-link to="/pay"
            >訂購單({{ $store.state.cart.length }})</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.storeheader {
  header: 100%;
  height: 60px;
  line-height: 60px;
  background-color: black;
  z-index: 99999;

  color: aliceblue;
}
.middlewrapper {
  width: 90%;
  overflow: hidden;
  margin: auto;
}
.logo {
  float: left;
}
ul {
  float: right;
}
li {
  display: inline-block;
  margin-right: 15px;
}
a {
  color: white;
}
a:hover {
  color: red;
}
</style>
