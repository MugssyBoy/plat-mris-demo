const { grundensInvoiceParser } = require('../core/parser/invoice')

module.exports = {
    parseGrundensInvoice: async function(req, res, next) {
        try {
            let result = await grundensInvoiceParser(req.file.filename)
            console.log('result', result)
        } catch (err) {
            next(err)
        }
    }
}