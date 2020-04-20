<template>
  <div class="container">
    <div class="info">
      <h1>Trade or View your portfolio</h1>
      <span>You may Save & Load your data.</span>
      <span>Click on "End Day" to begin new Day!</span>
    </div>
    <hr />
    <strong>
      <span>You Founds: {{funds}} $</span>
    </strong>
  </div>
</template>

<style>
.container {
  border: 1px solid grey;
  padding: 20px;
}

.info {
  display: flex;
  flex-direction: column;
}
</style>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>