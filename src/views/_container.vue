<template>
  <div id="app_container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainContainer',
  components: { },
  setup () {
    return { }
  }
})
</script>
