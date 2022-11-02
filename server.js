const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const cTable = require ('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// connect to the database