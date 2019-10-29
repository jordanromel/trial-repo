<template>
  <div id="anim-div">

  </div>
</template>

<script>
export default {
  name: 'Animation',
  data () {
    return {
    }
  },
  methods: {
    addToCart: function () {
      this.$emit('add-to-cart', this.product.variants[this.product.selected].id);
    },
    updateProduct: function(index) {
      this.product.selected = index;
    },
    removeToCart () {
      this.cart -= 1;
    },
  },
  computed: {
    title: function () {
      return this.product.brand + ' ' + this.product.name;
    },
    image: function () {
      return this.product.variants[this.product.selected].img;
    },
    inStock () {
      return this.product.variants[this.product.selected].quantity;
    },
    shipping () {
      return this.premium ? 'Free' : '4.99';
    },
  },
  props: {
    premium: Boolean,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#anim-div {
  width: 399px;
  height: 200px;
  margin: 2em auto;
  background: transparent url('http://w3bits.com/wp-content/uploads/sprite.png') 0 0 no-repeat;
  animation: anim-play 1s steps(12) infinite;
}

@keyframes anim-play {
  100% { background-position: 0 -2393px }
}
</style>
