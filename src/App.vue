<template>
  <div id="app">
    <router-view/>
    <footer-bar/>
  </div>
</template>

<script>
  import FooterBar from '@/components/FooterBar'

  export default {
    name: 'app',
    components: {
      FooterBar
    }

  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }
</style>
