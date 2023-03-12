<template>
  <div class="main">
    <div class="content">
      <button>
        <router-link to="/pay">訂購單</router-link>
      </button>
      <button>
        <router-link to="/nopay">下次再買清單</router-link>
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>
<script></script>

<style scoped>
.main {
  width: 90%;

  margin: 30px auto;

  border-bottom: 2px solid yellowgreen;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
}
.content button {
  position: relative;
  width: 150px;
  height: 60px;

  display: block;
  margin-left: 0.8px;
  border: 2px solid gray;
  border-radius: 10px 10px 0px 1px;
  background-color: white;
  font-size: 17px;
  font-weight: bold;
}
.content button:first-child {
  margin-left: 20px;
}

.content button a:hover {
  color: red;
}
button a {
  /* display: flex; */
  /* align-items: center; */
  display: block;
  height: 30px;
  line-height: 30px;
}
.is-active {
  width: 146px;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(to top, #0c5ddf, #00c8ff);
  color: aliceblue;
  padding: 14px 0px;
  border-radius: 7px 7px 0px 0px;
}
</style>
