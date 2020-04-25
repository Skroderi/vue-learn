<template>
  <div class="stock">
    <header>
      <span class="name">{{ stock.name }}</span>
      <span>(Price: {{ stock.price }} $)</span>
    </header>
    <div class="stock-content">
      <input type="number" min="0" placeholder="Quantity" v-model="quantity" />
      <button @click.prevent="buy" :disabled="insufficiereturnntFunds || quantity <=0">
        {{insufficiereturnntFunds ?
        'No funds' : 'Buy'}}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      quantity: 0
    };
  },
  props: ["stock"],
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficiereturnntFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buy() {
      const boughtStock = {
        stockId: this.stock.id,
        quantity: this.quantity,
        stockPrice: this.stock.price
      };
      console.log(boughtStock);
      this.$store.dispatch("buy", boughtStock);
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
