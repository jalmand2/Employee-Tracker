USE company_db;

INSERT INTO department (id, name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO role (id, title, salary, deparment_id)
VALUES ("Sales Lead"),
       ("Salesperson"),
       ("Lead Engineer"),
       ("Software Engineer");
       ("Account Manager");
       ("Accountant");
       ("Legal Team Lead");
       ("Lawyer");

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES ("Sales Lead"),
       ("Salesperson"),
       ("Lead Engineer"),
       ("Software Engineer");
       ("Account Manager");
       ("Accountant");