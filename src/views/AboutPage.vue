<template>
  <div>
    <NavbarItem/>
<AboutItemVue/>
  </div>
</template>

<script>
import AboutItemVue from '@/components/AboutItem.vue';
import NavbarItem from '@/components/NavbarItem.vue'
export default {
    name: "AboutPage",
    components: {
        NavbarItem,
        AboutItemVue
    }
}
</script>

<style>

</style>