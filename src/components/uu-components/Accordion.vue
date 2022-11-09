<template>
  <div class="accordion-area">
    <div class="accordion-header">
      <slot name="accordionNmae" />
      <button
        type="button"
        @click="open"
      >
        <span>화살표</span>
      </button>
    </div>
    <transition
      name="accordion-content"
      mode="out-in"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div
        v-show="activeStatus"
        class="accordion-content"
        :class="activeStatus? 'active':''"
      >
        <slot name="accordionContent" />
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
  },
  setup () {
    const activeStatus = ref(false)
    const active = ref('')

    function open () {
      activeStatus.value = !activeStatus.value
    }

    const startTransition = (el: HTMLElement) => {
      el.style.height = el.scrollHeight + 'px'
    }

    const endTransition = (el: HTMLElement) => {
      el.style.height = ''
    }

    console.log(activeStatus.value)

    return {
      active,
      activeStatus,
      open,
      startTransition,
      endTransition
    }
  }
})
</script>
<style scoped>
.accordion-content {
  border: 1px solid blue;
  overflow: hidden;
  transition: height .3s ease-out;
}
.accordion-content-enter-active, .accordion-content-leave-active {
  transition: all .3s ease;
}
.accordion-content-enter-from, .accordion-content-leave-to {
  height: 0 !important;
}
</style>
