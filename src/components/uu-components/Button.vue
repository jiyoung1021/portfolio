<template>
  <div class="btn-area">
    <a
      v-if="btnLink"
      href="javascript:;"
      class="btn"
      :class="[{'btn-primary': btnPrimary, 'btn-secondary': btnSecondary, active: active}, color? color:'', size? size:'', shape? shape:'']"
      :disabled="disabled"
      role="button"
    >
      <span :class="hideText? 'sr-only':''"><slot>{{ text }}</slot></span>
    </a>
    <button
      v-else
      type="button"
      class="btn"
      :class="[{'btn-primary': btnPrimary, 'btn-secondary': btnSecondary, active: active}, color? color:'', size? size:'', shape? shape:'', line? line:'']"
      :disabled="disabled"
      :aria-pressed="active"
    >
      <span :class="hideText? 'sr-only':''"><slot>{{ text }}</slot></span>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    btnPrimary: {
      type: Boolean,
      default: false
    },
    btnSecondary: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    hideText: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    shape: {
      type: String,
      default: ''
    },
    line: {
      type: String,
      default: ''
    },
    btnLink: {
      type: Boolean,
      default: false
    }
  },
  emits: [],
  setup () {
    return {
    }
  }
})
</script>
