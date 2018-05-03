<template>
  <div>
      <tabbar>
        <tabbar-item selected link="/home">
          <img slot="icon" src=''>
          <span slot="label">生日</span>
        </tabbar-item>
        <tabbar-item link="/gift">
          <img slot="icon" src=''>
          <span slot="label">送礼</span>
        </tabbar-item>
        <tabbar-item link="/community">
          <img slot="icon" src=''>
          <span slot="label">社区</span>
        </tabbar-item>
        <tabbar-item link="/info">
          <img slot="icon" src=''>
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vux'

  export default {
    name: "FooterBar",
    data() {
      return {
        selected:0
      }
    },
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped>
  .weui-tabbar{
    position: fixed;
  }
</style>
