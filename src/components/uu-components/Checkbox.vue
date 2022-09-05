<template>
  <div class="check-area">
    <input
      :id="randomString + 'checkbox'"
      :checked="checked"
      :value="value"
      type="checkbox"
      class="check-input"
      @change="updateInput"
    >
    <label
      :for="randomString + 'checkbox'"
      class="check-label"
      tabindex="0"
    >
      <span><slot>{{ label }}</slot></span>
    </label>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { getRandomId } from '@/utils/common.function'

export default defineComponent({
  props: {
    modelValue: {
      type: [Boolean, Array],
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup () {
    const randomString = getRandomId()
    const checked = ref(false)

    function updateInput () {
      checked.value = !checked.value
      // console.log(checked.value)
    }

    return {
      randomString,
      checked,
      updateInput
    }
  }
})
</script>
