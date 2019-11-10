import ajax from './ajax'


export const getAddress = (latitude, longitude) => ajax({

  url: `/position/${latitude},${longitude}`

})


export const getCategorys = () => ajax({

  url: '/index_category'


})

export const getShops = (latitude, longitude) => ajax({

  url: 'shops',
  params: {
    latitude,
    longitude
  }

})