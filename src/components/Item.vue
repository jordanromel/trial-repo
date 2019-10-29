<template>
  <div class="item" @click="selectItem" :class="{ selected: selectedItem === details.id }">
    <div class="display">
      <img :src="details.img" :alt="details.name">
    </div>
    <div class="details">
      <div class="brand">{{ brand }}</div>
      <div class="name">{{ details.name }}</div>
      <div class="price">{{ price }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Item',
  data () {
    return {
    }
  },
  methods: {
    selectItem: function () {
      this.CHANGE_SELECTED_ITEM(this.details.id)
    },
    ...mapActions(['CHANGE_SELECTED_ITEM'])
  },
  computed: {
    ...mapState(['shop', 'selectedItem']),
    brand () {
      return this.shop.brands[parseInt(this.details.brand, 10)].name
    },
    price () {
      return '₱' + this.details.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '.00'
    }
  },
  props: ['details']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item {
    /* border: 2px solid #000;
    box-sizing: border-box; */
    position: relative;
    display: flex;
    width: calc(100%/3);
    height: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .display {
    width: 90%;
  }
  .display img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    color: #000000;
  }
  .brand {
    text-transform: uppercase;
    font-weight: bold;
  }
  .name {
    font-size: 0.85rem;
  }
  .price {
    font-size: 0.85rem;
    color: #ff5a5a;
  }
  .selected {
    border: 2px solid #4CAF50;
    box-sizing: border-box;
  }
</style>
