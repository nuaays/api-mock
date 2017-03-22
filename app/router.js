module.exports = (app) => {
  app.get('/api/admin/order', 'order.index')
  app.get('/api/admin/product', 'product.index')
}
