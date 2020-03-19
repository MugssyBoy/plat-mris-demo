const Excel = require('exceljs')
const workbook = new Excel.Workbook()
const filePath = ('../../client/public/files/uploads/')

let obj = {}
let newArr = []

const fileReader = fileName => {
    return new Promise((resolve, reject) => {
        workbook.xlsx.readFile(filePath + fileName)
        .then(function() {
            workbook.eachSheet(function(worksheet, sheetId) {
                worksheet.eachRow(function(row, rowNumber) {
                    newArr.push(row.values)
                    return newArr
                })
            })
        })
        .then(() => {
            //console.log(newArr)
            resolve(newArr)
        })
    })
}

module.exports = fileReader