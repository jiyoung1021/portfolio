<template>
  <uu-accordion>
    <template #accordionNmae>
      <span>accordion</span>
    </template>
    <template #accordionContent>
      accordion content
    </template>
  </uu-accordion>
  <uu-accordion>
    <template #accordionNmae>
      <span>accordion</span>
    </template>
    <template #accordionContent>
      accordion content
    </template>
  </uu-accordion>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import Prism from 'prismjs'
import uuAccordion from '@/components/uu-components/Accordion.vue'

export default defineComponent({
  components: {
    uuAccordion
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
