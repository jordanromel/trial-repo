import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    shop: null,
    currentTab: 'Home',
    selectedItem: null,
    newProperty: null,
  },
  actions
})

export default store
