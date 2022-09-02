<template>
  <div class="guide-area">
    <div class="guide-header">
      <h2>GUIDE</h2>
      <nav class="menu">
        <ul>
          <li
            v-for="(item, index) in guideMenu"
            :key="index"
          >
            <button
              type="button"
              :aria-label="item.name + ' 페이지 이동'"
              @click="$router.push(item.link)"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GuideContainer',
  setup () {
    const guideMenu = [
      { name: 'checkbox', link: '/uu-libs/uuLibsCheckbox' },
      { name: 'combobox', link: '/uu-libs/uuLibsCombobox' },
      { name: 'progress', link: '/uu-libs/uuLibsProgress' },
      { name: 'toast', link: '/uu-libs/uuLibsToast' },
      { name: 'toggle', link: '/uu-libs/uuLibsToggle' },
      { name: 'tooltip', link: '/uu-libs/uuLibsTooltip' }
    ]

    return {
      guideMenu
    }
  }
})
</script>
