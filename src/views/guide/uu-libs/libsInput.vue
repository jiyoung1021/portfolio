
<template>
  <uu-form>
    <uu-input
      v-model="inputValue"
      type="text"
      label="label"
      placeholder="placeholder"
      @input="changeValue"
    />
    <uu-input
      type="text"
      label="label"
      placeholder="placeholder"
      disabled
    />
    <uu-input
      type="text"
      label="label"
      placeholder="placeholder"
      readonly
      value="안녕"
    />
  </uu-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import uuInput from '@/components/uu-components/Input.vue'
import uuForm from '@/components/uu-components/Form.vue'

export default defineComponent({
  components: {
    uuInput,
    uuForm
  },
  setup () {
    const inputValue = ref('')

    function changeValue (value : string) {
      console.log('value', value)
    }

    return {
      inputValue,
      changeValue
    }
  }
})
</script>
