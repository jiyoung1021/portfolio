<template>
  <div class="check-area">
    <input
      :id="randomString + 'checkbox'"
      :checked="checked"
      :value="value"
      type="checkbox"
      class="check-input"
      :disabled="disabled"
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
import { computed, defineComponent, ref } from 'vue'
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  setup (props, { emit }) {
    const randomString = getRandomId()
    const trueValue = ref(true)
    const falseValue = ref(false)
    const checked = computed(() => {
      if (props.modelValue instanceof Array) {
        return props.modelValue.includes(props.value)
      }
      return props.modelValue === trueValue.value
    })

    function updateInput (event : { target: HTMLInputElement }) {
      const checked = event.target.checked
      if (props.modelValue instanceof Array) {
        const arrayValue = [...props.modelValue]
        if (checked) {
          arrayValue.push(props.value)
        } else {
          arrayValue.splice(arrayValue.indexOf(props.value), 1)
        }
        emit('update:modelValue', arrayValue, checked)
        emit('change', arrayValue, checked)
      } else {
        emit('update:modelValue', checked ? trueValue.value : falseValue.value)
        emit('change', checked ? trueValue.value : falseValue.value)
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
