const db = require('./dbConnection');

module.exports = {
	createUser: user =>
		new Promise((resolve, reject) => {
			const { employeeId, firstName, lastName, email, userName, password } = user;
			const sql = `SET @EMPID = ?; SET @FNAME = ?; SET @LNAME = ?; SET @MAIL = ?; SET @UNAME = ?; SET @UPASS = ?; CALL sp_create_user(@EMPID, @FNAME, @LNAME, @MAIL, @UNAME, @UPASS)`;
			db.query(
				sql,
				[employeeId, firstName, lastName, email, userName, password],
				(err, rows) => (err ? reject(err) : resolve(rows[Object.keys(rows)[6]]))
			);
		}),
	authUser: user =>
		new Promise((resolve, reject) => {
			const { userName, password } = user;
			const sql = `SET @UNAME = ?; SET @UPASS = ?; CALL sp_auth_user(@UNAME, @UPASS)`;
			db.query(sql, [userName, password], (err, rows) =>
				err ? reject(err) : resolve(rows[Object.keys(rows)[2]])
			);
		}),
	getUserByID: employeeId =>
		new Promise((resolve, reject) => {
			const sql = `SELECT * from users where employee_id=${employeeId}`;
			db.query(sql, (err, rows) => (err ? reject(err) : resolve(rows)));
		}),
	getAllDepartmentList: () =>
		new Promise((resolve, reject) =>
			db.query(`CALL get_department_list()`, (err, rows) =>
				err ? reject(err) : resolve(rows[Object.keys(rows)[0]])
			)
		),
	findDeptByIdAndUpdate: (id, departmentName) =>
		new Promise((resolve, reject) =>
			db.query(
				`SET @DEPTID = ?; SET @DEPTNAME = ?; CALL update_department_name(@DEPTID, @DEPTNAME)`,
				[id, departmentName],
				(err, rows) =>
					err ? reject(err) : resolve(rows[Object.keys(rows)[2]].affectedRows)
			)
		)
};
