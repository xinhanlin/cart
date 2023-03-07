<template>
  <div class="main">
    <div class="content">
      <button>
        <router-link to="/">我的購物車</router-link>
      </button>
      <button>
        <router-link to="/nopay">下次在買清單</router-link>
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
  color: blue;
}
button a {
  display: flex;
  align-items: center;
  padding: 0 1.2rem;
  height: 100%;
}
.is-active {
  /* position: absolute;
  top: 0px;
  left: 0px; */
  border-radius: 10px 10px 0px 0px;
  /* line-height: 58px; */
  background-color: turquoise;
}
</style>
