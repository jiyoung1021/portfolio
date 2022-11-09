<template>
  <div class="combobox-area">
    <button
      type="button"
      class="btn-combo"
      :class="comboCont? 'active':''"
      @click="comboCont = !comboCont"
    >
      {{ changeValue }}
    </button>
    <ul
      v-show="comboCont"
      class="combo-content"
    >
      <li
        v-for="(item, index) in options"
        :key="index"
      >
        <button
          type="button"
          class="btn-list"
          @click="itemValue(item, index)"
        >
          {{ item }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    options: {
      type: Array,
      default: () => ([])
    },
    modelValue: {
      type: String,
      default: null
    }
  },
  emits: ['update:modelValue', 'click'],
  setup (props, { emit }) {
    const comboCont = ref(false)
    const changeValue = ref(props.modelValue)

    function itemValue (list: string) {
      comboCont.value = !comboCont.value
      changeValue.value = list
      emit('update:modelValue', list)
      emit('click', list)
    }

    return {
      itemValue,
      changeValue,
      comboCont
    }
  }
})
</script>
