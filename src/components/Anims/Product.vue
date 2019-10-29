<template>
  <div class="product">
    <div class="body">
      <div class="product-img">
          <img v-bind:src="image">
      </div>
      <div class="product-info">
        <!-- <h1>{{ product.name }}</h1> -->
        <h1>{{ title }}</h1>
        <h2>{{ product.desc }}</h2>
        
        <p v-if="inStock > 10">In stock</p>
        <p v-else-if="inStock > 0">Almost sold out!</p>
        <p v-else :class="{lined: inStock <= 0}">Out of stock</p>
        <p v-if="product.onSale">On Sale!</p>

        <p>Shipping: {{ shipping }}</p>
        
        <ul>
          <li v-for="detail in product.details" :key="detail" >{{ detail }}</li>
        </ul>

        <div v-for="(variant, index) in product.variants" 
          :key="variant.id"
          class="color-box"
          :style="{ backgroundColor: variant.color}"
          @mouseover="updateProduct(index)"
        >
          <!-- <p @mouseover="updateProduct(variant.img)">{{ }}</p> -->
        </div>

        <button v-on:click="addToCart" :disabled="(inStock <= 0)">Add to cart</button>
        <button v-if="cart > 0" v-on:click="removeToCart">Remove to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      product: {
        brand: 'Aladdin',
        name: 'Carpet',
        desc: 'Shining shimmering.',
        selected: 0,
        inventory: 0,
        onSale: false,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
          {
            id: 1,
            color: 'green',
            img: require('@/assets/carpet.jpg'),
            quantity: 30,
          },
          {
            id: 2,
            color: 'yellow',
            img: require('@/assets/carpet2.jpeg'),
            quantity: 0,
          },
        ],
      },
      cart: 0,
    }
  },
  methods: {
    addToCart: function () {
      // this.cart += 1;
      this.$emit('add-to-cart', this.product.variants[this.product.selected].id);
    },
    updateProduct: function(index) {
      // this.product.img = img;
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
