<template>
  <span class="tooltip-area">
    <button
      type="button"
      class="tooltip-button"
      :class="[top? 'top':'', bottom? 'bottom':'', left? 'left':'', right? 'right':'', center? 'center':'', large? 'large':'']"
      @click="tooltipClick"
    >
      <i class="icon icon-16-question" />
      <span class="sr-only">도움말</span>
    </button>
    <span
      v-if="tooltipText"
      class="tooltip-text"
    >
      <slot />
      <button
        type="button"
        class="btn-close"
        @click="tooltipClick"
      >
        <span class="sr-only">닫기</span>
      </button>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    top: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    }
  },
  emits: ['top', 'bottom', 'left', 'right', 'center', 'large'],
  setup () {
    const tooltipText = ref(false)
    function tooltipClick () {
      tooltipText.value = !tooltipText.value
    }
    return {
      tooltipText,
      tooltipClick
    }
  }
})
</script>
