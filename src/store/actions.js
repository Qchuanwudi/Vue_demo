import {
  SAVE_ADDRESS,

  SAVE_CATEGORYS,
  SAVE_SHOPS
} from './mutations-type'
import {
  getAddress,
  getShops,
  getCategorys
} from '../api'


export default {

  async getAddressAction({
    commit
  }) {
    let result = await getAddress(40.10038, 116.36867)
    if (result.code === 0) {
      commit(SAVE_ADDRESS, {
        address: result.data
      })
    }
  },
  async getCategorysAction({
    commit
  }, fn) {
    let result = await getCategorys()
    if (result.code === 0) {
      commit(SAVE_CATEGORYS, {
        categorys: result.data
      })

    }


  },


  async getShopsAction({
    commit,
    state
  }) {
    let result = await getShops(state.latitude, state.longitude)
    if (result.code === 0) {

      commit(SAVE_SHOPS, {
        shops: result.data
      })
    }


  }









}