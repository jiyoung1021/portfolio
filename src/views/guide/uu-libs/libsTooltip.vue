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
          <div class="guide-area">
            <div class="guide-header">
              <h3 class="title">
                Tooltip
              </h3>
            </div>
            <div class="guide-body">
              <div class="tooltip">
                <div class="area">
                  <span class="type">top / left</span>
                  <div class="wrap">
                    <span class="title">툴팁</span>
                    <uuTooltip
                      top
                      left
                    >
                      <span>
                        ‘예’를 선택하면 전송기간 동안 주 1회 개인신용정보가 전송됩니다.
                      </span>
                    </uuTooltip>
                  </div>
                </div>
                <div class="area">
                  <span class="type">top / center</span>
                  <div class="wrap">
                    <span class="title">툴팁</span>
                    <uuTooltip
                      top
                      center
                    >
                      <span>
                        ‘예’를 선택하면 전송기간 동안 주 1회 개인신용정보가 전송됩니다.
                      </span>
                    </uuTooltip>
                  </div>
                </div>
                <div class="area">
                  <span class="type">top / right</span>
                  <div class="wrap">
                    <span class="title">툴팁</span>
                    <uuTooltip
                      top
                      right
                    >
                      <span>
                        ‘예’를 선택하면 전송기간 동안 주 1회 개인신용정보가 전송됩니다.
                      </span>
                    </uuTooltip>
                  </div>
                </div>
                <div class="area">
                  <span class="type">bottom / left</span>
                  <div class="wrap">
                    <span class="title">툴팁</span>
                    <uuTooltip
                      bottom
                      left
                    >
                      <span>
                        ‘예’를 선택하면 전송기간 동안 주 1회 개인신용정보가 전송됩니다.
                      </span>
                    </uuTooltip>
                  </div>
                </div>
                <div class="area">
                  <span class="type">bottom / center</span>
                  <div class="wrap">
                    <span class="title">툴팁</span>
                    <uuTooltip
                      bottom
                      center
                    >
                      <span>
                        ‘예’를 선택하면 전송기간 동안 주 1회 개인신용정보가 전송됩니다.
                      </span>
                    </uuTooltip>
                  </div>
                </div>
                <div class="area">
                  <span class="type">bottom / right</span>
                  <div class="wrap">
                    <span class="title">툴팁</span>
                    <uuTooltip
                      bottom
                      right
                    >
                      <span>
                        ‘예’를 선택하면 전송기간 동안 주 1회 개인신용정보가 전송됩니다.
                      </span>
                    </uuTooltip>
                  </div>
                </div>
                <div class="area">
                  <span class="type">bottom / center / large</span>
                  <div class="wrap">
                    <span class="title">툴팁</span>
                    <uuTooltip
                      bottom
                      center
                      large
                    >
                      <span>
                        ‘예’를 선택하면 전송기간 동안 주 1회 개인신용정보가 전송됩니다.
                      </span>
                    </uuTooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- // content-body -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import uuTooltip from '@/components/uu-components/TooltipView.vue'

export default defineComponent({
  components: {
    uuTooltip
  },
  setup () {
    return {
    }
  }
})
</script>
