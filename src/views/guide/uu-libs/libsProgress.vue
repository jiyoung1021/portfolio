<template>
  <uu-progress
    :ing-number="4"
    :max-number="6"
  />
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import Prism from 'prismjs'
import uuProgress from '@/components/uu-components/Progress.vue'

export default defineComponent({
  components: {
    uuProgress
  },
  setup () {
    onMounted(() => {
      Prism.highlightAll()
    })

    return {
    }
  }
})
</script>
