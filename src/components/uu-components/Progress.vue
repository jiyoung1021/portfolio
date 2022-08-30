<template>
  <div class="progress-area">
    <div
      class="progress-bar"
      :style="'width:' + stepNumber + '%'"
    >
      <span class="sr-only">총 {{ maxNumber }}단계 중 {{ ingNumber }}단계 진행 중</span>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

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
    return {
      stepNumber
    }
  }
})
</script>
