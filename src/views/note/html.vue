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

    button
    - 키보드 'space'와 'enter' 동작
    - form 전송하거나 취소할 때
    - 팝업(모달) 열때 또는 팝업메뉴 열때
    - 동영상 플레이
    - 내용의 일부 변경
    - 동작을 위해 javascript 필요
    - 마우스 오른쪽 버튼에 별다른 기능 없음

    a
    - 키보드 'enter' 동작
    - 브라우저 redraw/refresg
    - 다른 문서 링크하거나, 같은 문서내 다른 anchor 이동
    - 새창
    - href 속성에 따라 페이지 이동
    - 마우스 오른쪽 버튼에 여러 기능 있음

    a 태그에 role="button" 속성을 추가하고, 키보드 'space'에 동작하도록 스크립트를 추가해서 사용
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
