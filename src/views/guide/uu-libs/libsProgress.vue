<template>
  <uu-progress
    :ing-number="4"
    :max-number="6"
  />
  <div>
    transition 추가 전
    <pre class="language-html">
      <code>
        &lt;template&gt;
          &lt;div class="progress-area"&gt;
            &lt;div
              class="progress-bar"
              :style="'width:' + stepNumber + '%'"
            &gt;
              &lt;span class="sr-only"&gt;총 {{ maxNumber }}단계 중 {{ ingNumber }}단계 진행 중&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/template&gt;
        &lt;script lang="ts"&gt;
        import { computed, defineComponent } from 'vue'

        export default defineComponent({
          props: {
            maxNumber: {
              type: Number,
              default: 0
            },
            ingNumber: {
              type: Number,
              default: 0
            }
          },
          setup (props) {
            const stepNumber = computed(() =&gt; {
              const maxNumber = 100 / props.maxNumber
              const ingNumber = maxNumber * props.ingNumber
              return ingNumber
            })
            return {
              stepNumber
            }
          }
        })
        &lt;/script&gt;
      </code>
    </pre>
  </div>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import Prism from 'prismjs'
import uuProgress from '@/components/uu-components/Progress.vue'

export default defineComponent({
  components: {
    uuProgress
  },
  setup () {
    onMounted(() => {
      Prism.highlightAll()
    })

    return {
    }
  }
})
</script>
