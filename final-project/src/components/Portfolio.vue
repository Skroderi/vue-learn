<template>
  <div class="stocks">
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
import PortfolioStock from "./PortfolioStock";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },

  components: {
    appStock: PortfolioStock
  }
};
</script>
