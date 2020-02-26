import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const count = {
  namespaced: true,
  state: { // 状态：保存数据
    count: 0
  },
  mutations: { // 变更：修改state
    increment(state) {
      state.count += 1;
    }
  },
  getters: {
    left(state) {
      return 10 - state.count;
    }
  },
  actions: { // 动作：业务逻辑
    increment({getters,state,commit,dispatch}) {
       if (getters.left > 0) {
         commit('increment')
         return true;
       }
       return false
    },
    asyncIncrement({dispatch}) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(dispatch('increment'))
        }, 1000);
      })
    }
  }
}

export default new Vuex.Store({
  modules: {
    a: count
  }
})
