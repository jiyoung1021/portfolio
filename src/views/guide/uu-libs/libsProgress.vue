<template>
  <uu-progress
    :ing-number="4"
    :max-number="6"
  />
</template>
<script>
import { defineComponent } from 'vue'
import uuProgress from '@/components/uu-components/ProgressView.vue'

export default defineComponent({
  components: {
    uuProgress
  },
  setup () {
    return {
    }
  }
})
</script>
