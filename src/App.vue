<template>
  <div id="app">
    <router-view class="page-view" />
  </div>
</template>

<script>
export default {
  name: "App",
}
</script>

<style scoped>
@import "assets/styles.css";

#app {
  display: flex;
  justify-content: center;
  margin: 0 64px;
}
.page-view {
  margin-top: 30px;
  max-width: 70%;
}
</style>