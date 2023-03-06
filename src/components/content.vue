<template>
  <div class="main">
    <div class="content">
      <button>
        <router-link to="/"
          >我&nbsp;&nbsp;的&nbsp;&nbsp;購&nbsp;&nbsp;物&nbsp;&nbsp;車</router-link
        >
      </button>
      <button>
        <router-link to="/nopay"
          >下&nbsp;次&nbsp;在&nbsp;買&nbsp;清&nbsp;單</router-link
        >
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
  width: 200px;
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
  font-size: 20px;
}
button {
  position: relative;
}
.is-active {
  width: 197px;
  height: 58px;
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 10px 10px 0px 0px;
  line-height: 58px;
  background-color: turquoise;
}
</style>
