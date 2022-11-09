<template>
  <transition
    :name="slide"
    @leave="slideEnd"
  >
    <div
      v-show="openToast"
      ref="toast"
      class="toast-area"
      tabindex="0"
    >
      <p class="toast-message">
        {{ message }}
      </p>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  setup () {
    const slide = ref('')
    const openToast = ref(false)

    function showToast () {
      slide.value = 'slide-up'
      openToast.value = !openToast.value
      setTimeout(() => {
        openToast.value = !openToast.value
      }, 2000)
    }

    function slideEnd () {
      slide.value = 'slid-down'
    }

    const toast = ref<HTMLDivElement | null>(null)

    onMounted(() => {
      toast.value?.focus()
    })

    return {
      slide,
      openToast,
      toast,
      showToast,
      slideEnd
    }
  }
})
</script>
