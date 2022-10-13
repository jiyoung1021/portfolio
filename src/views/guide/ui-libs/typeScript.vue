<template>
  <div>
    <pre class="language-html">
      <code>
dd
fdfad
      </code>
    </pre>
  </div>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import Prism from 'prismjs'

export default defineComponent({
  components: {
  },
  setup () {
    // const tabMenu = ref<HTMLDivElement | null>(null)
    // const tabContent = ref<HTMLDivElement | null>(null)
    onMounted(() => {
      Prism.highlightAll()
    })
    return {
    }
  }
})
</script>
