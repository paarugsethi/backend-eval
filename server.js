const express = require('express');
const mongoose = require('mongoose');
const connect = require('./app/config/db');
const Expense = require('./app/models/expenses.model');
const expensesController = require('./app/controllers/expenses.controller');

const app = express();
const PORT = 4000;

app.use("/expenses", expensesController);

const start = async() => {

    await connect();

    app.listen(PORT, () => {
        console.log(`Listening to ${PORT}`);
    })
}

module.exports = start;