<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import checkLogin from '@/mixins/checkLogin.js'

export default {
  name: 'home',
  components: {
  },
  mixins: [checkLogin]
}
</script>
