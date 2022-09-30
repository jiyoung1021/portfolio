<template>
  <uu-button
    btn-primary
    text="primary"
  />
  <uu-button
    btn-primary
    text="primary.active"
    active
    color="red"
  />
  <uu-button
    btn-primary
    text="primary.disabled"
    disabled
  />
  <uu-button
    btn-link
    btn-primary
    text="a.primary"
  />
  <uu-button
    btn-secondary
    text="secondary"
  />
  <uu-button
    btn-secondary
    text="secondary.active"
    active
    color="blue"
    size="lg"
    shape="round"
  />
  <uu-button
    btn-secondary
    text="secondary.disabled"
    disabled
  />
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import Prism from 'prismjs'
import uuButton from '@/components/uu-components/Button.vue'

export default defineComponent({
  components: {
    uuButton
  },
  setup () {
    onMounted(() => {
      Prism.highlightAll()
    })

    return {
    }
  }
})
</script>
