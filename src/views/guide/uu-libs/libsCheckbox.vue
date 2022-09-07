<template>
  <uu-checkbox
    v-model="checkValue1"
    label="checkbox"
    value="value1"
    @change="changeEvent"
  />
  <uu-checkbox
    v-model="checkValue1"
    label="disabled"
    value="value1"
    disabled
    @change="changeEvent"
  />
  <uu-checkbox
    v-model="checkValue2"
    label="checkbox2"
    value="value2"
    @change="changeEvent"
  />
  <uu-checkbox
    v-model="checkValue2"
    label="checkbox3"
    value="value3"
    @change="changeEvent"
  />
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import Prism from 'prismjs'
import uuCheckbox from '@/components/uu-components/Checkbox.vue'

export default defineComponent({
  components: {
    uuCheckbox
  },
  setup () {
    onMounted(() => {
      Prism.highlightAll()
    })

    const state = reactive({
      checkValue1: true,
      checkValue2: ['value2']
    })

    function changeEvent (value : boolean | []) {
      console.log(value)
    }

    return {
      ...toRefs(state),
      changeEvent
    }
  }
})
</script>
