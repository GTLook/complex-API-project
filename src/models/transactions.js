const uuid = require('uuid/v4')
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'data.json')
const accounts = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
const transactions = accounts.find(ele => ele.id === id).transactions
//const transactions = []
//accounts.find(ele => ele.id === id).transactions

class transaction {
  constructor({title, amount}){
    this.id = uuid()
    this.title = title
    this.amount = amount
    this.pending = true
  }
}

function getAll (limit) {
  return limit ? transactions.slice(0, limit) : transactions
}

function show(id){
    return transactions.find(ele => ele.id === id)
}

function create (body) {
  const errors = []

    let response
    if (!(body.title)) errors.push('Transaction title is required (title)')
    if (!(body.amount)) errors.push('Denomination is required (amount)')
    response = { errors }
    if (body.name && body.bankName && body.description) {
    const transaction = new Transaction({title: body.title, amount: body.amount})
    transactions.push(transaction)
    response = transaction
  }
  return response
}

function modify(id, body){
  const obj = transactions.find(ele => ele.id === id)
  obj.data.name = body
  return obj
}

function remove(id){
  return data.splice(data.indexOf(transactions.find(ele => ele.id === id)),1)
}


module.exports = { getAll, create, show, modify, remove}
