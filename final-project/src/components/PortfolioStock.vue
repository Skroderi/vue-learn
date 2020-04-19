<template>
  <div class="stock">
    <header>
      <span class="name">{{ stock.name }}</span>
      <span>(Price: {{ stock.price }} $) | Quantity: {{stock.quantity}}</span>
    </header>
    <div class="stock-content">
      <input type="number" min="0" placeholder="Quantity" v-model="quantity" />
      <button @click.prevent="sellStock" :disabled="quantity <=0">Sell</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      quantity: 0
    };
  },
  props: ["stock"],
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),

    sellStock() {
      const soldStock = {
        stockId: this.stock.id,
        quantity: this.quantity,
        stockPrice: this.stock.price
      };
      this.placeSellOrder(soldStock);
      this.quantity = 0;
    }
  }
};
</script>
<style>
.stock {
  border: 1px solid lightgray;
}

header {
  margin: 0;
  padding: 10px;
  background: lightgreen;
}

.name {
  font-size: 18px;
  font-weight: 800;
}

.stock-content {
  margin: 10px 20px;
  display: flex;
  justify-content: space-between;
}
</style>
