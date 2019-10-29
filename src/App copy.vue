<template>
  <div id="app">
    <!-- <div class="nav-bar"></div>
    <div class="cart">
      <p>Cart({{ cartCount }})</p>
    </div> -->
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <!-- <product :premium="premium" @add-to-cart="updateCart"></product>
    <animation></animation> -->
    <!-- <product :premium="premium"></product> -->
    <Header></Header>
  </div>
</template>

<script>
import Product from '@/components/Product';
import Animation from '@/components/Animation';
import Header from '@/components/Header';
export default {
  name: 'App',
  components: {
    Product,
    Animation,
    Header,
  },
  data () {
    return {
      premium: true,
      cart: [],
    }
  },
  methods: {
    updateCart: function (item) {
      this.cart.push(item);
    }
  },
  computed: {
    cartCount () {
      return this.cart.length;
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 0px;
}
/* .nav-bar {
  margin: 0;
  padding: 0;
  height: 65px;
  background-color: green;
  background-image: linear-gradient(to right, cyan, rgb(122, 221, 122));
} */
</style>
