const express = require('express')
const productsRoutes = require('./routes/ProductsRoutes')
const healthCheck = require('./routes/HealthCheck')
const app = express()
const port = 3000

app.use(express.json())
app.use(productsRoutes)
app.use(healthCheck)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})