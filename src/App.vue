<template>
  <TopNav/>
  <router-view/>
  <FooterBlock/>
</template>

<script>
import TopNav from '@/components/base/TopNav.vue';
import FooterBlock from '@/components/base/FooterBlock.vue';

export default {
  components: {
    TopNav,
    FooterBlock,
  },
}
</script>
