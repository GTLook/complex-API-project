const express = require('express')
const router = express.Router()
const transactionCtrl = require('../controllers/transactions')

router.get('/:id/transactions', transactionCtrl.getAll)
router.post('/:id/transactions', transactionCtrl.create)
router.get('/:id/transactions/:transactionId', transactionCtrl.show)
router.put('/:id/transactions/:transactionId', transactionCtrl.modify)
router.delete('/:id/transactions/:transactionId', transactionCtrl.remove)

module.exports = router
