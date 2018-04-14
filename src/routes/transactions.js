const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/transactions')

router.get('/', ctrl.getAll)
router.post('/', ctrl.create)
router.get('/:transactionId', ctrl.show)
router.put('/:transactionId', ctrl.modify)
router.delete('/:transactionId', ctrl.remove)

module.exports = router
