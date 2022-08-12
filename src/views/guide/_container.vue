<template>
  <div class="guide-area">
    <div class="guide-header">
      <h2>GUIDE</h2>
      <nav class="menu">
        <ul>
          <li v-for="(item, index) in menu" :key="index">
            <a :href="item.link">
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="guide-body">
      body
    </div>
    <div class="guide-footer">
      footer
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GuideContainer',
  setup () {
    const menu = [
      { name: 'introduction', link: '/introduction.vue' }
    ]

    return {
      menu
    }
  }
})
</script>
