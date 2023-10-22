<template>

  <TopNav/>

  <main>
    <router-view/>
  </main>

  <FooterBlock/>

</template>

<script>
import TopNav from '@/components/base/TopNav.vue';
import FooterBlock from '@/components/base/FooterBlock.vue';
import AOS from 'aos'

export default {
  data() {
    return {
      test: false,
    }
  },

  components: {
    TopNav,
    FooterBlock,
  },

  mounted() {
    AOS.init()
  },
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100%;

  main {
    flex-grow: 1;
    max-width: 100%;
    overflow: hidden;
  }
}
</style>
