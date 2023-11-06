<template>
  <HomeHeader />
  <HomeHero />
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeHero from './components/HomeHero.vue'

export default {
  name: 'App',
  components: {
    HomeHeader,
    HomeHero,
  }
}
</script>

