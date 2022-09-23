<template>
  <div class="radio-area">
    <input
      :id="randomString + 'radio'"
      :checked="checked"
      :value="value"
      type="radio"
      :name="name"
      class="radio-input"
      :disabled="disabled"
      @change="updateInput"
    >
    <label
      :for="randomString + 'radio'"
      class="radio-label"
      tabindex="0"
    >
      <span><slot>{{ label }}</slot></span>
    </label>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { getRandomId } from '@/utils/common.function'

export default defineComponent({
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  setup (props, { emit }) {
    const randomString = getRandomId()
    const checked = computed(() => {
      return props.modelValue === props.value
    })

    function updateInput (event : { target: HTMLInputElement }) {
      if (typeof props.value === 'number') {
        emit('update:modelValue', props.value)
        emit('change', props.value)
      } else {
        emit('update:modelValue', event.target.value)
        emit('change', event.target.value)
      }
    }

    return {
      randomString,
      checked,
      updateInput
    }
  }
})
</script>
