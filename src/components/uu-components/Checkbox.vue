<template>
  <div class="check-area">
    <input
      :id="randomString + 'checkbox'"
      :checked="checked"
      :value="value"
      type="checkbox"
      @change="checkedOn"
    >
    <label :for="randomString + 'checkbox'">
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
      type: Boolean,
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
  emits: [],
  setup () {
    const randomString = getRandomId()
    const checked = ref(false)

    function checkedOn () {
      checked.value = !checked.value
      console.log(checked.value)
    }

    return {
      randomString,
      checked,
      checkedOn
    }
  }
})
</script>
