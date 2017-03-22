const { mock } = require('mockjs')

module.exports = (app) => {
  class OrderController extends app.Controller {
    index () {
      this.ctx.set('Access-Control-Allow-Origin', '*')
      const productStatus = ['上架', '已下架']
      this.ctx.body = mock({
        'data|12': [
          {
            'id|10000-99999': 1,
            name: '@cword(3, 5)',
            band: '@cword(2, 3)',
            class: '@cword(2, 3)',
            type: '@cword(2, 3)',
            'stock|1-1000': 1,
            'sales|1-1000': 1,
            distribution_price: '@float(10, 1000, 1, 2)￥',
            distribution_status: () => productStatus[mock('@integer(0, 1)')],
            platform_status: () => productStatus[mock('@integer(0, 1)')],
          },
        ],
      })
    }
  }
  return OrderController
}
