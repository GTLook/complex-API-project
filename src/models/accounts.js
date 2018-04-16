const uuid = require('uuid/v4')
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'data.json')
const accounts = JSON.parse(fs.readFileSync(filePath, 'utf-8'))


class Account {
  constructor({name, bankName, description}){
    this.name = name
    this.id = uuid()
    this.bankName = bankName
    this.description = description
    this.transactions = [];
  }
}

function getAll(limit) {
  return limit ? accounts.slice(0, limit) : accounts
}

function show(id){
    return accounts.find(ele => ele.id === id)
}

function create (body) {
  const errors = []
    let response
     if (!(body.name)) errors.push('Your name is required (name)')
     if (!(body.bankName)) errors.push('Bank name is required (bankName)')
     if (!(body.description)) errors.push('Account description is required (description)')
    response = { errors }
    if (body.name && body.bankName && body.description) {
    const account = new Account({name: body.name, bankName: body.bankName, description: body.description})
    accounts.push(account)
    response = account
  }
  fs.writeFileSync(filePath,JSON.stringify(accounts))
  return response
}

function modify(id, body){
  const obj = accounts.find(ele => ele.id === id)
  obj.data.name = body
  fs.writeFileSync(filePath,JSON.stringify(accounts))
  return obj
}

function remove(id){
  const removed = data.splice(data.indexOf(accounts.find(ele => ele.id === id)),1)
  fs.writeFileSync(filePath,JSON.stringify(accounts))
  return removed
}


module.exports = { getAll, create, show, modify, remove}
