const path = require('path')
const multer = require('multer')
const filePath = './client/public/files/uploads/'

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, filePath),
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
})

const upload = multer({
    storage: storage
})

module.exports = upload