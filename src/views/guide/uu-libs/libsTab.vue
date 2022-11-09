<template>
  <uu-tab
    :tabs="tabs"
  >
    <template #slide1>
      tab content1
    </template>
    <template #slide2>
      tab content2
    </template>
    <template #slide3>
      tab content3
    </template>
  </uu-tab>
  <uu-tab
    :tabs="tabs1"
  >
    <template #slide1>
      tab content1
    </template>
    <template #slide2>
      tab content2
    </template>
    <template #slide3>
      tab content3
    </template>
  </uu-tab>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import Prism from 'prismjs'
import uuTab from '@/components/uu-components/Tab.vue'

export default defineComponent({
  components: {
    uuTab
  },
  setup () {
    onMounted(() => {
      Prism.highlightAll()
    })

    const tabs = ['자산', '소비', '목표']

    const tabs1 = ['tab12', 'tab22', 'tab32']

    return {
      tabs,
      tabs1
    }
  }
})
</script>
