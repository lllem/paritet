<template>
  <component :is="`h${ h || 1 }`">
    <slot/>
  </component>
</template>

<script>
export default {
  props: {
    h: {
      type: Number,
      default: 1,
    },
    white: Boolean,
  },
}
</script>
