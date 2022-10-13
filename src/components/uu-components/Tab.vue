<template>
  <div class="tab-area">
    <div class="tab-header">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab"
        :class="{'active' : tabIndex === index }"
      >
        <button
          type="button"
          class="btn-tab"
          @click="onClick(index)"
        >
          <span>{{ tab }}</span>
        </button>
      </div>
    </div>
    <div class="tab-content">
      <div
        v-for="(tab, index) in tabs"
        v-show="tabIndex === index? true:''"
        :key="index"
        class="tab-panel"
        :class="{'active' : tabIndex === index}"
      >
        <slot :name="`slide${ index + 1 }`" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    tabs: {
      type: Array,
      default: () => ([])
    }
  },
  setup () {
    const tabIndex = ref(0)

    function onClick (index: number) {
      tabIndex.value = index
      console.log(tabIndex.value)
    }

    return {
      tabIndex,
      onClick
    }
  }
})
</script>
