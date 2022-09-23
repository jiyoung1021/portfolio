<template>
  <div class="input-area">
    <label
      :for="randomString + 'input'"
      class="input-label"
    >
      <span>{{ label }}</span>
    </label>
    <div class="input-group">
      <input
        :id="randomString + 'input'"
        ref="inputRef"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :value="value"
        class="input-input"
        @input="onInput"
      >
      <span class="input-button">
        <button
          type="button"
          class="input-delete"
        >
          <span class="sr-only">지우기</span>
        </button>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { getRandomId } from '@/utils/common.function'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: ['input'],
  setup (props, { emit }) {
    const randomString = getRandomId()
    // const value = ref('')
    const inputRef = ref<HTMLInputElement | null>(null)

    function onInput (event: {target : HTMLInputElement}) {
      // value.value = event.target.value
      emit('input', event.target.value)
    }

    return {
      randomString,
      onInput,
      inputRef
    }
  }
})
</script>
