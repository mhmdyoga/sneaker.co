<template>
  <div class="home">
    <NavbarItemVue/>
    <HeroPage />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroPage from '@/components/HeroPage.vue'
import NavbarItemVue from '@/components/NavbarItem.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarItemVue,
    HeroPage
  }
}
</script>
