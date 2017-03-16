module.exports = (app) => {
  app.get('/api/admin/order', 'order.index')
}
