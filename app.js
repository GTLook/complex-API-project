//inialize modules used
const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const fs = require('fs')

app.disable('x-powered-by')
app.use(bodyParser.json())
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

const accountRoutes = require('./src/routes/accounts')
app.use('/accounts', accountRoutes)
const transactionRoutes = require('./src/routes/transactions')
app.use('/accounts', transactionRoutes)


app.use((err, req, res, next) => {
  console.error(err)
  const status = err.status || 500
  res.status(status).json({ error: err })
})

const listener = () => console.log(`Listening on port ${port}!`)
app.listen(port, listener)

module.exports = app
