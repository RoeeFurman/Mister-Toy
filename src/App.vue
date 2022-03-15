

<template>
  <section>
    <app-header />
    <router-view />
  </section>
</template>

<script>
import appHeader from './components/app-header.vue'
export default {
  name: 'app',
  created() {
    this.$store.dispatch({ type: 'loadToys' })
  },
  // methods: {
    // clicked() {
      // alert('I got clicked!')
    // },
  // },
  components: {
    appHeader,
  },
}
</script>
