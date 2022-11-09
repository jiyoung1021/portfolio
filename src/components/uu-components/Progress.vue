<template>
  <div class="progress-area">
    <transitionn
      appear
      @before-appear="ingNumber"
      @after-appear="ingNumber"
    >
      <div
        :style="{ width: stepNumber + '%'}"
        class="progress-bar"
      >
        <span class="sr-only">총 {{ maxNumber }}단계 중 {{ ingNumber }}단계 진행 중</span>
      </div>
    </transitionn>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'

export default defineComponent({
  props: {
    maxNumber: {
      type: Number,
      default: 0
    },
    ingNumber: {
      type: Number,
      default: 0
    }
  },
  setup (props) {
    const stepNumber = computed(() => {
      const maxNumber = 100 / props.maxNumber
      const ingNumber = maxNumber * props.ingNumber
      return ingNumber
    })
    onMounted(() => {
      // style.transition = 'width 3s linear'
      return stepNumber
    })

    return {
      stepNumber
    }
  }
})
</script>
