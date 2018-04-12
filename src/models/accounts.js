const uuid = require('uuid/v4')
const accounts = []

class Account {
  constructor({name, bankName, description}){
    this.name = name
    this.id = uuid()
    this.bankName = bankName
    this.description = description
    this.transactions = [];
  }
}

function getAll (limit) {
  return limit ? accounts.slice(0, limit) : accounts
}

function show(id){
    return accounts.find(ele => ele.id === id)
}

function create (body) {
  console.log(body)
  const errors = []
  // const name = body.name
  // const

    let response
     if (!(body.name)) errors.push('Your name is required')
     if (!(body.bankName)) errors.push('Bank name is required')
     if (!(body.description)) errors.push('Account description is required')
    response = { errors }
    if (body.name && body.bankName && body.description) {
    const account = new Account({name: body.name, bankName: body.bankName, description: body.description})
    accounts.push(account)
    response = account
  }
  return response
}

function modify(id, body){
  const obj = accounts.find(ele => ele.id === id)
  obj.data.name = body
  return obj
}

function remove(id){
  return data.splice(data.indexOf(accounts.find(ele => ele.id === id)),1)
}


module.exports = { getAll, create, show, modify, remove}
