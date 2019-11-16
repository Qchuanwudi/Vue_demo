import Vue from 'vue'
import {
  getShopDatas
} from '../../api'

import {
  SAVE_SHOPDATAS,
  ADD_FOOD_COUNT,
  DEL_FOOD_COUNT,
  CLEAR_CARTSHOPS,
  SAVE_CARTSHOPS
} from '../mutations-type'

const state = {
  shopDatas: {}, // 初始化商家信息数据
  cartShops: [], // 购物车的数据
}





const actions = {
  async getShopDatasAction({
    commit
  }) {
    let result = await getShopDatas()
    if (result.code === 0) {
      commit(SAVE_SHOPDATAS, {
        shopDatas: result.data
      })
    }
  }
}

const mutations = {
  [SAVE_SHOPDATAS](state, {
    shopDatas
  }) {
    state.shopDatas = shopDatas
  },

  [SAVE_CARTSHOPS](state, {
    cartShops
  }) {
    state.cartShops = cartShops
  },


  [ADD_FOOD_COUNT](state, {
    food
  }) {
    if (food.count) { // count > 0
      food.count++
    } else { // count： 1. undefined 2. 0
      // 非响应式属性，数据发生变化，页面不会更新
      // food.count = 1
      Vue.set(food, 'count', 1)
      state.cartShops.push(food)
    }
  },
  [DEL_FOOD_COUNT](state, {
    food
  }) {
    if (food.count) {
      food.count--
      if (!food.count) {

        // 从购物车删除商品
        state.cartShops.splice(state.cartShops.indexOf(food, 1))
      }
    }
  },
  [CLEAR_CARTSHOPS](state) {
    state.cartShops.forEach(food => food.count = 0)
    state.cartShops = []

  }
}


const getters = {

  totalCount() {
    return state.cartShops.reduce((pre, food) => {
      return pre += food.count

    }, 0)

  },


  totalPrice(state) {
    return state.cartShops.reduce((pre, food) => {
      return pre += food.count * food.price
    }, 0)



  }



}



export default {
  state,
  actions,
  mutations,
  getters
}