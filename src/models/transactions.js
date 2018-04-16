const uuid = require('uuid/v4')
const fs = require('fs')
const path = require('path')

//pull accounts from database
const filePath = path.join(__dirname, 'data.json')


class Transaction {
  constructor({title, amount}){
    this.transactionId = uuid()
    this.title = title
    this.amount = amount
    this.pending = true
  }
}

function getAll (id, limit) {
  const accounts = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  const transactions = accounts.find(ele => ele.id === id).transactions
  return limit ? transactions.slice(0, limit) : transactions
}

function show(id, transactionId){
  const accounts = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  const transactions = accounts.find(ele => ele.id === id).transactions
  return transactions.find(ele => ele.transactionId === transactionId)
}

function create (id, body) {
  const accounts = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  const transactions = accounts.find(ele => ele.id === id).transactions
  const errors = []

    let response
    if (!(body.title)) errors.push('Transaction title is required (title)')
    if (!(body.amount)) errors.push('Denomination is required (amount)')
    response = { errors }
    if (body.title && body.amount) {
    const transaction = new Transaction({title: body.title, amount: body.amount})
    transactions.push(transaction)
    response = transaction
  }
  fs.writeFileSync(filePath,JSON.stringify(accounts))
  return response
}

function modify(id, transactionId, body){
  const accounts = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  const transactions = accounts.find(ele => ele.id === id).transactions
  const obj = transactions.find(ele => ele.id === transactionId)
  obj.data.name = body
  fs.writeFileSync(filePath,JSON.stringify(accounts))
  return obj
}

function remove(id, transactionId){
  const accounts = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  const transactions = accounts.find(ele => ele.id === id).transactions
  fs.writeFileSync(filePath,JSON.stringify(accounts))
  return data.splice(data.indexOf(transactions.find(ele => ele.id === transactionId)),1)
}


module.exports = { getAll, create, show, modify, remove}
