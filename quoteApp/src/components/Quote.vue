
<template>
  <div class="col-sm-6 col-md-4 cd-lg-3">
    <div class="panel panel-default">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quotes"]
};
</script>

<style>
.panel-body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
