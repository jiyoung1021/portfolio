<template>
  <div>
    table에서 line-height는 테이블의 행 높이값을 조절함
  </div>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import Prism from 'prismjs'

export default defineComponent({
  components: {
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
