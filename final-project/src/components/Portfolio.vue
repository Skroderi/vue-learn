<template>
  <div class="stocks">
    <app-stock v-for="stock in stocks" :name="stock.name" :price="stock.price"></app-stock>
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
  data: function() {
    return {
      portfolio: this.$store.state.portfolio
    };
  },
  computed: {
    // stocks() {
    //   console.log(this.stocks);
    // }
  },

  components: {
    appStock: Stock
  }
};
</script>
