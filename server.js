const mysql = require('mysql2');
const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const cTable = require ('console.table');

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

