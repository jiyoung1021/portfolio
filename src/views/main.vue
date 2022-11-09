<template>
  <div class="main-area">
    <div class="main-header">
      <h1>
        <!-- 데이터 이동 X 정적인 페이지내 이동 -->
        <!-- <router-link to="/">TEST</router-link> -->
        <button
          type="button"
          aria-label="메인 페이지 이동"
          @click="$router.push('/')"
        >
          <span>제목</span>
        </button>
      </h1>
      <ul>
        <li
          v-for="(item, index) in menu"
          :key="index"
        >
          <!-- 데이터 이동 X 새로고침 되면서 새로운 페이지 이동 -->
          <a
            v-if="false"
            :href="item.link"
            :title="item.menu + ' 페이지 이동'"
          >
            <span>{{ item.menu }}</span>
          </a>
          <!-- 데이터와 페이지가 같이 이동됨 -->
          <button
            type="button"
            :aria-label="item.menu + ' 페이지 이동'"
            @click="$router.push(item.link)"
          >
            <span>{{ item.menu }}</span>
          </button>
        </li>
      </ul>
    </div>
    <div class="main-body">
      <div
        v-for="(item, index) in menu"
        :key="index"
        class="main-content"
      >
        <div>
          1
        </div>
        <div>
          2
        </div>
        <div>
          3
        </div>
        <div>
          4
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'MainContainer',
  setup () {
    const menu = [
      { menu: '소개', link: '/info/container' },
      { menu: '가이드', link: '/guide/main' },
      { menu: '노트', link: '/note/container' },
      { menu: '프로젝트', link: '/project/container' }
    ]

    // const groupModel = ref(menu[0])

    // console.log(groupModel.value)

    // onMounted(() => {
    //   scrollMove(groupModel.value)
    // })

    // const menuIndex = ref(0)

    // function scrollMove (location: HTMLElement | null) {
    //   if (location !== null) {
    //     const locationTop = location.offsetTop
    //     const headerHeight = 52
    //     const locationY = locationTop - headerHeight
    //     const mainContent = document.getElementsByClassName('main-content')[0]
    //     mainContent.scrollTo({
    //       top: locationY,
    //       left: 0,
    //       behavior: 'smooth'
    //     })
    //   }
    // }

    // function surveyRadio (val : string) {
    //   if (menu) {
    //     const location = document.getElementById('surveyStep2')
    //     scrollMove(location)
    //   }
    // }

    return {
      menu
      // groupModel,
      // menuIndex,
      // scrollMove,
      // surveyRadio
    }
  }
})
</script>
<style lang="scss" scoped>
.main-area {
  position: relative;
  height: 100vh;
  .main-header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5.2rem;
    padding: 0 2rem;
    border-bottom: .1rem solid #eee;
    background-color: #fff;
    h1 {
      display: block;
      button {
        display: block;
        span {
          font-size: 1.7rem;
        }
      }
    }
    ul {
      display: flex;
      li {
        ~ li {
          margin-left: .8rem;
        }
      }
    }
  }
  .main-body {
    height: 100%;
    padding-top: 5.2rem;
    .main-content {
      height: 100%;
      border: 1px solid #000;
    }
  }
}
</style>
