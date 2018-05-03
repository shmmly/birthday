<template>
  <div>
    <tab>
      <tab-item selected @on-item-click="onItemClick">{{items[0].name}}</tab-item>
      <tab-item @on-item-click="onItemClick">{{items[1].name}}</tab-item>
      <tab-item @on-item-click="onItemClick">{{items[2].name}}</tab-item>
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
    props: {
      items: {
        required: true,
        type: Array
      }
    },
    methods: {
      onItemClick(index) {
        switch (index) {
          case 0:
            this.$router.push(this.items[0].url)
            break;
          case 1:
            this.$router.push(this.items[1].url)
            break;
          case 2:
            this.$router.push(this.items[2].url)
            break;
        }
      }
    }
  }
</script>

<style scoped>

</style>
