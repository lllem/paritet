<template>
  <a
  class="p-button bg-sky-500 text-white py-4 px-6 uppercase inline-block"
  :href="href"
  >
    <slot/>
  </a>
</template>

<script>
export default {
  props: {
    href: String,
  },
}
</script>

<style lang="scss">
.p-button {
  border-radius: 3em;
}
</style>
