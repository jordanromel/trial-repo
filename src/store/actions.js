import db from '@/data/db.json'

export default {
  PARSE_JSON (store) {
    store.state.shop = db // JSON.parse(db);
  },
  CHANGE_TAB (store, payload) {
    store.state.currentTab = payload
  },
  CHANGE_SELECTED_ITEM (store, payload) {
    store.state.selectedItem = payload
  }
}
