<template>
  <div class="about">
    <h1>This is an about page</h1>
    <section class="section">
      <div class="div">a</div>
      <div class="div">b</div>
      <div class="div">c</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>
<style scoped>
.section {
  display: flex;
  flex-direction: row;
}
.div{
  background-color: red;
  color: white;
  margin: auto;
  width: 100px;
  border: thin solid red;
}
.div:hover {
  background-color: brown;
  color: blueviolet;
}
</style>