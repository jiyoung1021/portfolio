<template>
  <div class="guide-area">
    <h1>
      <!-- 데이터 이동 X 정적인 페이지내 이동 -->
      <!-- <router-link to="/">TEST</router-link> -->
      <button
        type="button"
        aria-label="메인 페이지 이동"
        @click="$router.push('/')"
      >
        Test
      </button>
    </h1>
    <ul>
      <li
        v-for="(item, index) in menu"
        :key="index"
      >
        <!-- 새로운 페이지 이동 + 새로고침 -->
        <!-- <a
          :href="item.link"
          :title="item.menu + ' 페이지 이동'"
        >{{ item.menu }}</a> -->
        <!-- 데이터와 페이지가 같이 이동됨 -->
        <button
          type="button"
          :aria-label="item.menu + ' 페이지 이동'"
          @click="$router.push(item.link)"
        >
          {{ item.menu }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainContainer',
  setup () {
    const menu = [
      { menu: '테스트', link: '/info/infoView' }
    ]
    return {
      menu
    }
  }
})
</script>
