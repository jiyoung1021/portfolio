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

    <pre class="language-html">
      <code>
$char: (
'woodcutter': #ccabff,
'analyst': #94caff,
'judge': #8ed6f1,
'pursuer': #c8b4a5,
'collector': #6c7c88,
'adventurer': #89bae1,
'notset': #94caff
);
@each $char-name, $char-bg in $char {
  &.#{$char-name} {
    background-color: $char-bg;
    &::after {
      @if #{$char-name} == 'woodcutter' {
        width: 28.3rem;
      } @else if #{$char-name} == 'analyst' {
        width: 18.5rem;
      } @else if #{$char-name} == 'judge' {
        width: 31rem;
      } @else if #{$char-name} == 'pursuer' {
        width: 25.3rem;
      } @else if #{$char-name} == 'collector' {
        width: 24rem;
      } @else if #{$char-name} == 'adventurer' {
        width: 18.5rem;
      } @else {
        width: 18rem;
      }
      background: url(#{$img-path}/visual/visual_character_#{$char-name}01.png) no-repeat 0 0 / contain;
    }
  }
}

$i: index;
@for $i from 1 through 5 {
  &.level0#{$i} {
    &::after {
      background: url(#{$img-path}/visual/visual_level0#{$i}_small.png) no-repeat 0 0 / contain;
    }
  }
}
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
    onMounted(() => {
      Prism.highlightAll()
    })
    return {
    }
  }
})
</script>
