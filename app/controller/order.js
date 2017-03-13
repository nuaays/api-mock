const { mock } = require('mockjs')

module.exports = app => {
  class OrderController extends app.Controller {
    * index (res) {
      this.ctx.set('Access-Control-Allow-Origin', '*')
      this.ctx.body = mock({
        'data|8': [
          {
            'id|+1': 1,
            'order_no|1000000000-9999999999': 1,
            'amount|1-1000.1-2': 1,
            'order_type|1-3': 1,
            'order_status|1-3': 1,
            'payment_name|1-3': 1,
            'member_phone|13198210411-19198210411': 1,
            'member_name': '@cname',
            'company_name': '@cword(3, 5)' + '公司',
            'source|1-3': 1,
            'operating_system|1-3': 1,
            'brokerage_stores': '@cword(3, 5)' + '店',
            'create_time': '@datetime',
            'pay_time': '@datetime',
            'send_time': '@datetime',
            'finish_time': '@datetime',
            'efast_add_status|1-3': 1
          }
        ]
      })
    }
  }
  return OrderController
}
