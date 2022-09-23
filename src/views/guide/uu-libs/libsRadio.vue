<template>
  <uu-form>
    <uu-radio
      v-model="checkValue1"
      label="radio1"
      value="value1"
      name="RadioName"
      @change="changeEvent"
    />
    <uu-radio
      v-model="checkValue1"
      label="radio2"
      value="value2"
      name="RadioName"
      @change="changeEvent"
    />
  </uu-form>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import Prism from 'prismjs'
import uuRadio from '@/components/uu-components/Radio.vue'
import uuForm from '@/components/uu-components/Form.vue'

export default defineComponent({
  components: {
    uuRadio,
    uuForm
  },
  setup () {
    onMounted(() => {
      Prism.highlightAll()
    })

    const state = reactive({
      checkValue1: 'value1'
    })

    function changeEvent (value : number) {
      console.log(value)
    }

    return {
      ...toRefs(state),
      changeEvent
    }
  }
})
</script>
