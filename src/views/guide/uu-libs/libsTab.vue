<template>
  <uu-tab />
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import Prism from 'prismjs'
import uuTab from '@/components/uu-components/Tab.vue'

export default defineComponent({
  components: {
    uuTab
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
