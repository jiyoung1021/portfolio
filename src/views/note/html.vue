<template>
  <div>
    input 들어간다면
    form은 무조건 1번 써야함
    묶음으로 있을경우 fieldset 묶어주기
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
