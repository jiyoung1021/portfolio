<template>
  <uu-toast
    ref="toast"
    :message="message"
  />
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import uuToast from '@/components/uu-components/Toast.vue'

export default defineComponent({
  components: {
    'uu-toast': uuToast
  },
  setup () {
    const message = ref('안녕하세요')

    const toast = ref<InstanceType<typeof uuToast> | null>(null)

    onMounted(() => {
      toast.value?.showToast()
    })

    return {
      toast,
      message
    }
  }
})
</script>
