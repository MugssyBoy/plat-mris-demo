const router = require('express').Router()
const {
    getAllDepartment,
    updateDepartmentName
} = require('../handler/department')

router
    .route('/department')
    .get(getAllDepartment)

router
    .route('/department/:id')
    .post(updateDepartmentName)

module.exports = router