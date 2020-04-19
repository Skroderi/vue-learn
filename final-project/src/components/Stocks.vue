<template>
  <div class="stocks">
    <!-- <app-stock v-for="stock in stocks" :name="stock.name" :price="stock.price"></app-stock> -->
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<style>
.stocks {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
</style>

<script>
import Stock from "./Stock";

export default {
  // data: function() {
  //   return {
  //     stocks: this.$store.state.stocks
  //   };
  // },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  },

  components: {
    appStock: Stock
  }
};
</script>
