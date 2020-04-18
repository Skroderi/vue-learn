<template>
  <div class="stock">
    <header>
      <span class="name">Google</span>
      <span>(Price: 13)</span>
    </header>
    <div class="stock-content">
      <input type="number" min="0" placeholder="0" />
      <button>Buy</button>
    </div>
  </div>
</template>

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