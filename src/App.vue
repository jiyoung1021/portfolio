<template>
  <mainContainer />
</template>

<script>
import { defineComponent } from 'vue'
import mainContainer from '@/views/_container.vue'

export default defineComponent({
  name: 'App',
  components: {
    mainContainer
  },
  setup () {
    return { }
  }
})
</script>
<style>
#application {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
