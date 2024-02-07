<template>
  <div class="btn">
    <button><router-link to="/products" style="color: black;">{{ msg }}</router-link></button>
  </div>
</template>

<script>
export default {
    name: "CustomButton",
   props: {
    msg: String
   }
}
</script>

<style>

</style>