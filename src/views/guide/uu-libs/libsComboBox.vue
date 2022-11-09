
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

    const options = ['잔액 높은 순', '연결 계좌 많은 순', 'DIY 순서']

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
