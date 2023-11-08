<template>
  <HomeHeader />
  <RouterView></RouterView>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'

export default {
  name: 'App',
  components: {
    HomeHeader,
  }
}
</script>

