SELECT employee.id, employee.first_name, employee.last_name, role.role_name, department_name AS department, role.salary
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id