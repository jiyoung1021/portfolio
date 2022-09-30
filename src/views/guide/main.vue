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
      { name: 'Button', link: '/uu-libs/uuLibsButton' },
      { name: 'Checkbox', link: '/uu-libs/uuLibsCheckbox' },
      { name: 'Combobox', link: '/uu-libs/uuLibsCombobox' },
      { name: 'Input', link: '/uu-libs/uuLibsInput' },
      { name: 'Progress', link: '/uu-libs/uuLibsProgress' },
      { name: 'Radio', link: '/uu-libs/uuLibsRadio' },
      { name: 'Tab', link: '/uu-libs/uuLibsTab' },
      { name: 'Toast', link: '/uu-libs/uuLibsToast' },
      { name: 'Todo', link: '/uu-libs/uuLibsTodo' },
      { name: 'Toggle', link: '/uu-libs/uuLibsToggle' },
      { name: 'Tooltip', link: '/uu-libs/uuLibsTooltip' }
    ]

    return {
      guideMenu
    }
  }
})
</script>
