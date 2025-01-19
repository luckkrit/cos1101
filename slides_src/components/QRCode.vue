<template>
  
  <qrcode-vue class="border-4 border-white" :value="value" :size="size" level="H" :render-as="renderAs" />
  
</template>
<script>
  import QrcodeVue from 'qrcode.vue'

  export default {
    data() {
      return {
        value: 'https://example.com',
        size: 300,
        renderAs: 'svg'
      }
    },
    components: {
      QrcodeVue,
    },
  }
</script>