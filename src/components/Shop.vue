<template>
  <div id="content-shop">
    <div class="result">Showing 1 of 30 results</div>
    <div id="shop">
      <div class="result" v-if="currentTab === 'Men' || currentTab === 'Women'">Showing 1</div>
      <div class="cons-shop">
        <Item v-for="item in shop.items.slice(0, 9)" :key="item.name" :details="item"></Item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Item from '@/components/Item'

export default {
  name: 'Shop',
  components: {
    Item
  },
  data () {
    return {

    }
  },
  methods: {
  },
  computed: {
    ...mapState(['shop', 'currentTab'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #content-shop {
    position: absolute;
    width: 100vw;
    height: 177.5vw;
    max-height: 100vh;
    max-width: 56.34vh;
    top: 5%;
    overflow: hidden;
    left: 0;
    right: 0;
  }
  #shop {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .cons-shop {
    position: relative;
    overflow: scroll;
    width: 100%;
    height: 95%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: flex-start;
  }
  .result {
    position: relative;
    width: 100%;
    text-align: center;
    /* display: block; */
    /* margin-top: 2.5%; */
    /* margin-left: 2.5%; */
    /* margin-right: 50%;
    margin-left: 50%; */
  }
</style>
