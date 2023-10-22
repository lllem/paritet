<template>
  <component
  :is="`h${ h || 1 }`"
  class="title-spark font-bold"
  :class="{
    'text-white': white,
    't-dark': !white,
  }"
  data-aos="fade-left"
  data-aos-delay="100"
  data-aos-duration="800"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    h: {
      type: [Number, String],
      default: 2,
    },
    white: Boolean,
  },
}
</script>

<style lang="scss">
.title-spark {
  &::after {
    content: '';
    display: inline-block;
    height: 0.75em;
    width: 2.25em;
    background-image: url('@/assets/img/elements/title-spark.svg');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100%;
    margin-left: 0.25em;
  }
}
</style>
