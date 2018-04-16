const model = require('../models/transactions')

function getAll (request, response, next) {
  const id = request.params.id
  const limit = request.query.limit
  const data = model.getAll(id, limit)
  response.status(200).json({ data })
}

function show (request, response, next) {
  const id = request.params.id
  const transactionId = request.params.transactionId
  const data = model.show(id, transactionId)
  response.status(200).json({ data })
}

function create (request, response, next) {
  const id = request.params.id
  const result = model.create(id, request.body)
  if (result.errors) return next({ status: 400, message: `Could not create new transaction`, errors: result.errors })
  response.status(201).json({ data: result })
}

function modify (request, response, next) {
  const id = request.params.id
  const body = request.body
  const transactionId = request.params.transactionId
  const data = model.modify(id, transactionId, body)
  response.status(200).json({ data })
}

function remove (request, response, next) {
  const id = request.params.id
  const transactionId = request.params.transactionId
  const data = model.remove(id, transactionId)
  response.status(200).json({ data })
}

module.exports = { getAll, create, show, modify, remove }
