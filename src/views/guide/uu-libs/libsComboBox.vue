
<template>
  <div
    id="page"
    class="page"
  >
    <div
      id="content"
      class="content"
    >
      <!-- content-body -->
      <div class="content-body">
        <section class="section content-side">
          <div>
            <uu-combobox
              v-model="comboValue"
              :options="options"
              @click="changeEvent"
            />
          </div>
        </section>
      </div>
      <!-- // content-body -->
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import Prism from 'prismjs'
import uuCombobox from '@/components/uu-components/Combobox.vue'

export default defineComponent({
  components: {
    uuCombobox
  },
  setup () {
    onMounted(() => {
      Prism.highlightAll()
    })

    const options = ['test1', 'test2', 'test3']

    const comboValue = options[0]

    function changeEvent (list) {
      console.log(list)
    }
    return {
      changeEvent,
      comboValue,
      options
    }
  }
})
</script>
