<template>
  <div id="header">
    <div class="tab-view">
      <div class="tab" v-for="tab in tabs" :key="tab" :class="{ active: currentTab === tab }" @click="changeTab(tab)">{{tab}}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      tabs: ['Home', 'Men', 'Women', 'Contact', 'About']
    }
  },
  methods: {
    addToCart: function () {
      this.$emit('add-to-cart', this.product.variants[this.product.selected].id)
    },
    changeTab: function (tab) {
      this.CHANGE_TAB(tab)
    },
    ...mapActions(['CHANGE_TAB'])
  },
  computed: {
    ...mapState(['currentTab'])
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  position: fixed;
  width: 100%;
}
  .tab-view {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
    overflow: hidden;
    background-color: #333;
  }
  .tab {
    color: #ffffff;
    text-decoration: none;
    padding: 14px 16px;
  }
  .tab:hover {
    background-color: #111;
  }
  .active {
    background-color: #4CAF50;
  }
</style>
