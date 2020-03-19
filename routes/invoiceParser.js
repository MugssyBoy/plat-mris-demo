const router = require('express').Router({ mergeParams: true })
const { parseGrundensInvoice } = require('../handler/invoiceParser')

router
    .route('/grundens')
    .post(parseGrundensInvoice)

module.exports = router