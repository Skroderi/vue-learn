<template>
  <div class="stocks">
    <app-stock></app-stock>
    <app-stock></app-stock>
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
  data() {
    return {};
  },

  components: {
    appStock: Stock
  }
};
</script>