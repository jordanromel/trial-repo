<template>
  <div id="app">
    <Header></Header>
    <Shop></Shop>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Shop from '@/components/Shop'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Shop
  },
  created () {
    this.PARSE_JSON()
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['PARSE_JSON']),
    hello: function () {
      console.log('checking');
    },
    hi: function () {
      console.log('answering');
    }
  },
  computed: {
  }
}
</script>

<style>
/* @media only screen and (max-aspect-ratio: 40/71) { */
@media only screen and (max-width: 500) {
    #app {
      font-size: 5vw;
    }
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
  width: 100vw;
  height: 177.5vw;
  max-height: 100vh;
}
body, html {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
