<template>
  <span>{{
    this.prefix + Number.parseFloat(this.value).toFixed(this.precision)
  }}</span>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    prefix: {
      type: String,
      default: "Rp",
    },
    precision: {
      type: Number,
      default: 3,
    },
  },
};
</script>
