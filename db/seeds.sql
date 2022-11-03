USE company_db;

INSERT INTO department (department_name)
VALUES ( "Engineering"),
       ( "Finance"),
       ( "Legal"),
       ( "Sales");

INSERT INTO role (title, salary, department_id)
VALUES ( "Sales Lead", 100000, 4),
       ( "Salesperson", 80000, 4),
       ( "Lead Engineer", 150000, 1),
       ( "Software Engineer", 120000, 1),
       ( "Account Manager", 160000, 2),
       ( "Accountant", 125000, 2),
       ( "Legal Team Lead", 250000, 3),
       ( "Lawyer", 190000, 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("David", "Seagle", 2),
       ("Lacey", "Daley", 3),
       ("Jennifer", "Love-Hewitt", 1),
       ( "John", "Deere", 5),
       ( "Daisy", "Buchanan", 7),
       ("Sheryl", "Crow", 4),
       ("Daniel", "Radcliffe", 6),
       ("Samuel", "Jackson", 8);