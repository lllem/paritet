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
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100%;

  main {
    flex-grow: 1;
  }
}
</style>
