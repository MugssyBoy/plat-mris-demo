require('dotenv').config()
const path = require('path')
const cors = require('cors')
const express = require('express')

const serverPort = process.env.PORT || 8080;
const errHandler = require('./handler/error')
const upload = require('./core/helper/upload')
const { isAuthenticated } = require('./middleware/auth')

const app = express()

app.use(cors())
app.use(express.json())

// ========================= routes here =======================

app.get('/api', isAuthenticated, (req, res) => res.status(200).json({ msg: "Home Page" }))

app.use('/api/auth/', require('./routes/auth'))

app.use('/api/admin/', require('./routes/department'))
app.use('/api/invoice-parser/', upload.single('myFile'), require('./routes/invoiceParser'))

// =============================================================

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + 'client/public'))
    app.get('*', function(req, res) {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.use(function(req, res, next) {
    let err = new Error('Not Found.')
    err.status = 404
    next(err)
})

app.use(errHandler)

app.listen(serverPort, function() {
    console.log(`running on port: ${serverPort}`)
})