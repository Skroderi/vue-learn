<template>
  <div>
    <div class="title">
      <slot name="title"> </slot>
      <span style="color: #ccc"><slot name="subtitle">The subtitle</slot></span>
    </div>
    <hr />
    <div>
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 0 auto;
}
h2 {
  color: red;
}

.title {
  font-style: italic;
}
</style>
