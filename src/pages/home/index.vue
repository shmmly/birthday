<template>
  <div>
    <nav-bar :items="items"/>
    <router-view name="home"></router-view>
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      :placeholder="placeholder"
      ref="search"></search>

  </div>

</template>

<script>
  import NavBar from '@/components/NavBar'

  import {Search} from 'vux'

  export default {
    name: "Home",
    data() {
      return {
        items: [
          {
            name: '动态',
            url: '/home/dynamic'
          },
          {
            name: '好友',
            url: '/home/frind'
          },
          {
            name: '日历',
            url: '/home/calendar'
          }
        ],
        results: [],
        value: ''
      }
    },
    components: {
      NavBar,
      Search
    },
    computed: {
      //通过api获取成员的个数
      placeholder: function () {
        return ' 搜索53位好友'
      }
    },
    methods: {
      resultClick() {

      },
      onFocus() {

      },
      onCancel() {

      },
      onSubmit() {

      },
      //根据输入的数值，在后台模糊匹配结果
      async getResult() {
        console.log(this.value)

      }

    }
  }
</script>

<style>

</style>
