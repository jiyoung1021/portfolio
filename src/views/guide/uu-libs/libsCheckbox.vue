<template>
  <uu-checkbox
    v-model="checkValue"
    label="checkbox"
    value="value"
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
      checkValue: true
    })

    function changeEvent (val : boolean | []) {
      console.log(val)
    }
    return {
      ...toRefs(state),
      changeEvent
    }
  }
})
</script>
