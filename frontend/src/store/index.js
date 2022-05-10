import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {},
    shops: []
  },
  getters: {
    user: (state) => state.user,
    shops: (state) => state.shops
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
    shops(state, shops) {
      state.shops = shops;
    }
  },
  actions: {
    user(context, user) {
      context.commit('user', user);
    },
    shops(context, shops) {
      context.commit('shops', shops);
    }
  },
  modules: {
  }
})
