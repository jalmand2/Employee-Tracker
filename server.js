const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;

// connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
);
// function addDepartment()
// function addRole()
// function addEmployee()
// function updateEmployeeRole()
function menu() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View departments',
                'View roles',
                'View employees',
                'Add an employee',
                'Add a role',
                'Add a department',
                'Update an employee role'
            ],
            name: 'userChoice',
        }
    ]).then(data => {
        console.log(data);
        if (data.userChoice === 'View employees') {
            db.query('SELECT employee.id, employee.first_name, employee.last_name, title, department_name AS department, role.salary FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id', function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.table(data);
                    menu();
                }
            });
        } else if (data.userChoice === 'View departments') {
            db.query('Select department_name FROM department', function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.table(data);
                    menu();
                }
            });
        } else if (data.userChoice === 'View roles') {
            db.query('Select title FROM role', function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.table(data);
                    menu();
                }
            });
        } else if (data.userChoice === 'Add an employee') {
            addEmployee();
        } else if (data.userChoice === 'Add a role') {
            addRole();
        } else if (data.userChoice === 'Add a department') {
            addDepartment();
        } else if (data.userChoice === 'Update an employee role') {
            updateEmployeeRole();
        }
    });
}
menu();
