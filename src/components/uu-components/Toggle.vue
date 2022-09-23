<template>
  <div class="toggle-area">
    <div
      v-if="textToggle"
      class="toggle-radio"
    >
      <label :for="randomString + 'toggleleft'">
        <input
          :id="randomString + 'toggleleft'"
          v-model="toggleTextValue"
          type="radio"
          :name="name"
          :value="leftText"
          @change="toggleOn"
        >
        <span class="text">{{ leftText }}</span>
      </label>
      <label :for="randomString + 'toggleright'">
        <input
          :id="randomString + 'toggleright'"
          v-model="toggleTextValue"
          type="radio"
          :name="name"
          :value="rightText"
          @change="toggleOn"
        >
        <span class="text">{{ rightText }}</span>
      </label>
    </div>
    <div
      v-else
      class="toggle-check"
    >
      <!-- 텍스트가 정해져 있을 경우
      <label :for="randomString + 'toggle'">
        <input
          :id="randomString + 'toggle'"
          type="checkbox"
          :value="toggleText"
          @change="toggleSwitch"
        >
        <span class="slide">
          <span class="text">{{ toggleText? 'ON':'OFF' }}</span>
        </span>
      </label> -->
      <label :for="randomString + 'toggle'">
        <input
          :id="randomString + 'toggle'"
          type="checkbox"
          :value="toggleText"
          :true-value="leftText"
          :false-value="rightText"
          @change="toggleSwitch"
        >
        <span class="slide">
          <span class="text">{{ toggleText? leftText:rightText }}</span>
        </span>
      </label>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue'
import { getRandomId } from '@/utils/common.function'

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    textToggle: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue', 'change'],
  setup (props, { emit }) {
    const randomString = getRandomId()

    const toggleText = ref(true)

    const state = reactive({
      toggleTextValue: props.modelValue
    })

    function toggleSwitch () {
      toggleText.value = !toggleText.value
      console.log(toggleText.value)
    }

    function toggleOn () {
      emit('update:modelValue', state.toggleTextValue)
      emit('change', state.toggleTextValue)
    }

    return {
      randomString,
      toggleText,
      ...toRefs(state),
      toggleSwitch,
      toggleOn
    }
  }
})
</script>
