const {
    getAllDepartmentList,
    findDeptByIdAndUpdate,
    findDeptByIdAndRemove
} = require('../models/query')

module.exports = {
    getAllDepartment: async function (req, res, next) {
        try {
            const list = await getAllDepartmentList()
            list.length > 0 ? res.status(200).json(await list.map(({ id, department_name }) => ({ id, department_name }))) : next({ status: 400, message: "Something went wrong with the server." })
        } catch (err) {
            next(err)
        }
    },
    updateDepartmentName: async function(req, res, next) {
        try {
            const { id, departmentName} = req.body
            await findDeptByIdAndUpdate(id, departmentName) == 1 ? res.status(200).json({ message: "Update Success" }) : next({ status: 400, message: "Something went wrong with the server." })
        } catch (err) {
            next(err)
        }
    }
}