<template>
  <uu-checkbox
    label="checkbox"
    value="value"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import uuCheckbox from '@/components/uu-components/Checkbox.vue'

export default defineComponent({
  components: {
    uuCheckbox
  },
  setup () {
    return {
    }
  }
})
</script>
