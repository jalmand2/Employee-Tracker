const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express');

const app = express();
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
function addDepartment() {
    inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of the department?',
        name: 'department_name',
    },
    ]).then(data => {
        db.query('INSERT INTO department SET ?', data, function(err, results) {
            if(err) {
                console.log(err);
            } else {
                console.log(`Department: "${data.department_name}" added!`);
            } return menu();
        });
    });
}
function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the role?',
            name: 'role_name'
        },
        {
            type: 'input',
            message: 'What is the salary?',
            name: 'salary'
        },
        {
            type: 'list',
            message: 'What is the department of the role?',
            choices: ['Engineering', 'Finance', 'Legal', 'Sales'],
            // Google map for tables
            name: 'department_id'
        },
    ]).then(data => {
        db.query('INSERT INTO role SET ?', data, function(err, results) {
            if(err) {
                console.log(err);
            } else {
                console.log(`Role: "${data.role_name}" added!`);
            } return menu();
        });
    });
}
// function addEmployee() {
//     inquirer.prompt([
//         {
//         type: 'input', 
//         message: `What is the employee's first name?`,
//         name: 'first_name',
//         },
//     {
//         type: 'input', 
//         message: `What is the employee's last name?`,
//         name: 'last_name',
//     },
//     {
//         type: 'list', 
//         message: `What is the employee's role?`,
//         choices: [
//             '1: Sales Lead',
//             '2: Salesperson',
//             '3: '
//         ]
//         name: 'role_id',
//     },
//     ]
//     )
// }
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
            db.query('SELECT employee.id, employee.first_name, employee.last_name, role.role_name, department_name AS department, role.salary FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id', function (err, data) {
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
            db.query('Select role_name FROM role', function (err, data) {
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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
