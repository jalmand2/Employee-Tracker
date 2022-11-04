SELECT employee.id, employee.first_name, employee.last_name, title, department_name AS department, role.salary
FROM employee
JOIN role ON employee.role_id = role.id
JOIN deparment ON role.department_id = department.id