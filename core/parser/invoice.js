const newObj = [];
const Excel = require('exceljs');
const workbook = new Excel.Workbook();
const filePath = '../../client/public/files/uploads/';

let invoiceNumber, invoiceDate, poNumber, poDate, terms, invoiceDiscount, totalUSD, totalCostWithTaxAndDsFee, dropshipFee, carrierName;

module.exports = {
    grundensMFNInvoiceParser: function (fileName) {
        return new Promise((resolve, reject) => {
            workbook.xlsx.readFile(filePath + fileName)
                .then(function () {
                    workbook.eachSheet(function (worksheet, sheetId) {
                        worksheet.eachRow(function (row, rowNumber) {

                            if (row.values[2] === 'Ship Via') carrierName = row.values[3]
                            if (row.values[6] === 'Invoice Number:') invoiceNumber = row.values[9]
                            if (row.values[6] === 'Invoice Date:' || row.values[7] === 'Invoice Date:') invoiceDate = row.values[9]
                            if (row.values[6] === 'P.O. Number') poNumber = row.values[9]
                            if (row.values[6] === 'P.O. Date') poDate = row.values[9]
                            if (row.values[6] === 'Total USD:' || row.values[7] === 'Total USD:') totalCostWithTaxAndDsFee = row.values[9].toFixed(2)
                            if (row.values[6] === 'Invoice Discount:') invoiceDiscount = row.values[9].toFixed(2)
                            if (row.values[2] === 'Terms') terms = row.values[3]
                            if (row.values[3] === 'Freight Charge') dropshipFee = row.values[4]
                            if (row.values[3] === 'Total USD:') totalUSD = row.values[9]

                            if (row.values[1] === 'Item Number') {
                                if (row.values[8]) {
                                    newObj.push({
                                        rowNumber: rowNumber,
                                        itemNumber: row.values[2].replace(/\s/g, ''),
                                        orderedQty: row.values[4],
                                        shippedQty: row.values[5],
                                        itemCost: "",
                                        discountedCost: row.values[7].toFixed(2),
                                        discountPercentage: row.values[8].toFixed(2),
                                        totalPrice: row.values[9].toFixed(2)
                                    })
                                } else {
                                    newObj.push({
                                        rowNumber: rowNumber,
                                        itemNumber: row.values[2].replace(/\s/g, ''),
                                        orderedQty: row.values[4],
                                        shippedQty: row.values[5],
                                        discountedCost: "",
                                        discountPercentage: "",
                                        itemCost: row.values[7].toFixed(2),
                                        totalPrice: row.values[9].toFixed(2)
                                    })
                                }
                            }

                        })
                    })
                })
                .then(() => resolve(newObj.map(({ itemNumber, orderedQty, shippedQty, discountedCost, discountPercentage, totalPrice }) => ({ itemNumber, orderedQty, shippedQty, itemNumber, discountedCost, discountPercentage, totalPrice, carrierName, invoiceNumber, invoiceDate, poNumber, poDate, totalCostWithTaxAndDsFee, invoiceDiscount, terms, dropshipFee, totalUSD }))))
                .catch(err => reject(err))
        })
    },
    grundensBulkInvoiceParser: function (fileName) {
        return new Promise((resolve, reject) => {
            workbook.xlsx.readFile(filePath + fileName)
                .then(function () {
                    workbook.eachSheet(function (worksheet, sheetId) {
                        worksheet.eachRow(function (row, rowNumber) {

                            if (row.values[1] === 'Ship Via') carrierName = row.values[2]
                            if (row.values[1] === 'Terms') terms = row.values[2]
                            if (row.values[5] === 'Invoice Number:') invoiceNumber = row.values[7]
                            if (row.values[5] === 'Invoice Date:') invoiceDate = row.values[7]
                            if (row.values[5] === 'P.O. Number') poNumber = row.values[7]
                            if (row.values[5] === 'P.O. Date') poDate = row.values[7]
                            if (row.values[5] === 'Invoice Discount:') invoiceDiscount = row.values[7]
                            if (row.values[5] === 'Total USD:') totalUSD = row.values[7]

                            if (row.values[1] !== 'Item Number' && row.values[2] && row.values[6] && row.values[7]) {
                                newObj.push({
                                    itemNumber: row.values[1].replace(/\s/g, ''),
                                    orderedQty: row.values[3],
                                    shippedQty: row.values[4],
                                    unitPrice: row.values[6],
                                    totalPrice: row.values[7]
                                })
                            }

                        })
                    })
                })
                .then(() => resolve(newObj.map(({ itemNumber, orderedQty, shippedQty, unitPrice, totalPrice }) => ({ itemNumber, orderedQty, shippedQty, unitPrice, totalPrice, carrierName, terms, invoiceNumber, invoiceDate, poNumber, poDate, invoiceDiscount, totalUSD }))))
                .catch(err => reject(err))
        })
    }
}