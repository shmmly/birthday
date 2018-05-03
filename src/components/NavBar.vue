<template>
  <div>
    <tab>
      <tab-item selected @on-item-click="onItemClick">已发货</tab-item>
      <tab-item @on-item-click="onItemClick">未发货</tab-item>
      <tab-item @on-item-click="onItemClick">全部订单</tab-item>
    </tab>
  </div>
</template>

<script>
  import {Tab, TabItem} from 'vux'

  export default {
    name: "NavBar",
    components: {
      Tab,
      TabItem
    },
    prop: {
      items: {
        required: true,
        type: Array
      }
    },
    methods: {
      onItemClick(index) {
        console.log(index)
      }
    }
  }
</script>

<style scoped>

</style>
