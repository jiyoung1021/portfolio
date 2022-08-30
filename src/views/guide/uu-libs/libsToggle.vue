<template>
  <uu-toggle />
  <uu-toggle
    v-model="toggleText01"
    text-toggle
    name="radio1"
    left-text="선택"
    right-text="고정"
    @change="changeEvent"
  />
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import uuToggle from '@/components/uu-components/Toggle.vue'

export default defineComponent({
  components: {
    uuToggle
  },
  setup () {
    const state = reactive({
      toggleText01: '선택'
    })
    function changeEvent (value: string) {
      console.log(value)
    }
    return {
      ...toRefs(state),
      changeEvent
    }
  }
})
</script>
