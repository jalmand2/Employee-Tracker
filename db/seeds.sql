USE company_db;

INSERT INTO department (id, name)
VALUES ( 1, "Engineering"),
       ( 2, "Finance"),
       ( 3, "Legal"),
       ( 4, "Sales");

INSERT INTO role (id, title, salary, deparment_id)
VALUES ( 1, "Sales Lead", 100000, 4),
       ( 2, "Salesperson", 80000, 4),
       ( 3, "Lead Engineer", 150000, 1),
       ( 4, "Software Engineer", 120000, 1),
       ( 5, "Account Manager", 160000, 2),
       ( 6, "Accountant", 125000, 2),
       ( 7, "Legal Team Lead", 250000, 3),
       ( 8, "Lawyer", 190000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("David", "Seagle", 2),
       ("Lacey", "Daley", 4),
       ("Jennifer", "Love-Hewitt", 3),
       ("John", "Deere", 3),
       ("Daisy", "Buchanan", 1),
       ("Sheryl", "Crow", 4),
       ("Daniel", "Radcliffe", 2),
       ("Samuel", "Jackson", 1);