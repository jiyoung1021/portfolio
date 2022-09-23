<template>
  <fieldset>
    <legend>{{ legend }}</legend>
    <slot />
  </fieldset>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    legend: {
      type: String,
      default: ''
    }
  },
  emits: [],
  setup () {
    return {
    }
  }
})
</script>
