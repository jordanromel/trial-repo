<template>
  <div class="product">

  </div>
</template>

<script>
export default {
  name: 'ProductReview',
  data () {
    return {
      name: null,
      review: null,
      rating: null,
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
h1, h2 {
  font-weight: normal;
}
/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
.product-img img{
  width: 300px;
  height: 350px;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

.lined {
  text-decoration: line-through;
}
</style>
