<template>
  <div>
    <NavbarItem/>
    <ProductItem/>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import NavbarItem from '@/components/NavbarItem.vue';

export default {
    name: "ProductView",
    components: {
        NavbarItem,
        ProductItem
    }
}
</script>

<style>

</style>