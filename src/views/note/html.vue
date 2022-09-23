<template>
  <div>
    A 태그 : title
    Button : aria-label

    Dl : 정의가 필요한 목차를 설정할 때 사용
    Dt : 용어의 정의
    - Inline(block 요소 쓸 수 없음)
    Dd : dt 태그의 용어를 설명
    - Block
    Dt 다수 + dd 소수 가능
    Dt 다수 + dd 다수 가능

    Form
    - input 1개라도 들어간다면 form으로 묶음
    Fieldset : form 요소에서 연관된 요소들을 하나의 그룹으로 묶을 때 사용
    - 여러 묶을일 경우 fieldset 나눠서 묶음
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
