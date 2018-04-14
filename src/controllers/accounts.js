const model = require('../models/accounts')

function getAll (request, response, next) {
  const limit = request.query.limit
  const data = model.getAll(limit)
  response.status(200).json({ data })
}

function show (request, response, next) {
  const id = request.params.id
  const data = model.show(id)
  response.status(200).json({ data })
}

function create (request, response, next) {
  const result = model.create(request.body)
  if (result.errors) return next({ status: 400, message: `Could not create new account`, errors: result.errors })
  response.status(201).json({ data: result })
}

function modify (request, response, next) {
  const body = request.body
  const id = request.params.id
  const data = model.modify(id, body)
  response.status(200).json({ data })
}

function remove (request, response, next) {
  const id = request.params.id
  const data = model.remove(id)
  response.status(200).json({ data })
}

module.exports = { getAll, create, show, modify, remove }
