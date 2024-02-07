<template>
  <div class="nav">
    <div class="logo">
        <img src="../assets/whitelogo.png" alt="">
    </div>
    <ul>
        <router-link to="/">Home</router-link>
        <router-link to="/about-us">About</router-link>
        <router-link to="/products">Product</router-link>
    </ul>
  </div>
</template>

<script>
export default {
    name: "NavbarItem"
}
</script>

<style>

</style>