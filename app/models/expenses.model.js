const mongoose = require('mongoose');

// Schema
const ExpensesSchema = new mongoose.Schema({
    type: {type: String, required:true}, 
    date: {type: Date, required:true}, 
    employee_id: {type: String, required:true}, 
    reimbursed: {type: Boolean, required:true}, 
    reimbursement_date: {type: Date, required:false}
})

const Expense = mongoose.model("expenses", ExpensesSchema, "expenses");

module.exports = Expense;