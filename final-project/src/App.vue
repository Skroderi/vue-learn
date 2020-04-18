<template>
  <div class="wrapper">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Stocks from "./components/Stocks";
import Stock from "./components/Stock";

export default {
  data() {
    return {};
  },

  components: {
    appHeader: Header,
    appHomepage: Homepage,
    appStock: Stock,
    appStocks: Stocks
  }
};
</script>

<style>
.wrapper {
  max-width: 1300px;
  margin: 0 auto;
}
</style>
