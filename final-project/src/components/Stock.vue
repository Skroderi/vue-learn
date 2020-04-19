<template>
  <div class="stock">
    <header>
      <span class="name">{{ stock.name }}</span>
      <span>(Price: {{ stock.price }} $)</span>
    </header>
    <div class="stock-content">
      <input type="number" min="0" placeholder="Quantity" v-model="quantity" />
      <button @click.prevent="buy" :disabled="quantity <=0">Buy</button>
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
  methods: {
    buy() {
      const boughtStock = {
        name: this.name,
        quantity: this.quantity,
        price: this.price,
        cost: this.quantity * this.price
      };
      console.log(boughtStock);
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
