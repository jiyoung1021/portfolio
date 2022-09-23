<template>
  <div>
    Background
    Image repeat position size
    Background: url() no-repeat 0 0 / contain

    Flex
    Flex-basis : flex 아이템의 기본 크기를 설정
    flex-direction: row - width
    flex-direction: column - height

    Flex-grow : item flex-basis 값보다 커질 수 있는지 결정, 비율로 나눔

    Flex-shrink : item flex-basis 값보다 작아질 수 있는지 결정

    Position
    기본값 : static
    Relative : 요소를 원래의 위치에서 벗어나게 배치
    Absolute : static 아닌 첫 번째 상위 요소에 해당 요소가 배치
    - Top, left, bottom, right 속성 적용
    Fixed : 위아래 스크롤을 해도 브라우저 화면의 특정 부분에 고정되어 움직이지 않음
    - 특정 위치에 고정
    Sticky : 요소가 스크롤링 될 때 효과가 나타남

    Height
    Vh : viewport height
    - 현재 실행중인 스크린 크기에 맞춰 상대적 크기를 반환
    - 열려있는 화면 전체의 상대길이
    %
    - % 쓰고 있는 요소의 부모 요소의 길이에 맞게 반환
    - 현재 화면 길이를 반환

    Table
    - line-height는 테이블의 행 높이값을 조절함

    aspect-ratio
    - 크기를 조정할떄 비율로 조정가능
    - width / height
    - 3 : 1 이면 width: 33.3%, height: 100%
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
