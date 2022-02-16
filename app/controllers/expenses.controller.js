const express = require('express');
const Expense = require('../models/expenses.model');
const router = express.Router();


router.get("/", async (req, res) => {
    try{
        const expenses = await Expense.find();
        if (!expenses) return res.status(404).send("Data not found");
        res.status(200).send(expenses);
    }
    catch(err){
        return res.status(404).json({message: "Something went wrong!"});
    }
})

// CREATING AN EXPENSE
router.post("/", async(req, res) => {
    try{
        console.log(req.body.type)
        const doesExpenseExist = await Expense.findOne({date: req.body.date, reimbursement_date: req.body.reimbursement_date});
        if (doesExpenseExist) return res.status(400).json({message: "Expense already recorded"})


        const expense = await Expense.create({
            type: req.body.type,
            date: req.body.date,
            employee_id: req.body.employee_id,
            reimbursed: req.body.reimbursed,
            reimbursement_date: req.body.reimbursement_date
        })
        console.log(expense)

        if (!expense) return res.status(404).json({message: "Expense not recorded"})

        return res.status(200).json(expense);

    } catch (err) {
        return res.status(404).json({message: "Something went wrong!"});
    }
})

// Reimbursing an expense - POST

// Getting all expenses raised between date 1 and date 2

// Getting all expenses grouped by type and sorted by desc or asc counts
router.get("/expensetypes", async(req, res) => {
    try{
        const expenseTypes = await Expense.aggregate([
            { $group: {_id: '$type', count: {$sum: 1}}
        }])
        if (!expenseTypes) return res.status(404).send("Data not found");
        res.status(200).send(expenseTypes);

    } catch(err) {
        return res.status(404).json({message: "Something went wrong!"});
    }
})

// Getting all expenses by user id 
router.get("/id/:employee_id", async(req, res) => {
    try{
        const expensesById = await Expense.find({employee_id: req.params.employee_id});
        if (!expensesById) return res.status(404).send("Data not found");
        res.status(200).send(expensesById);
    }
    catch(err){
        return res.status(404).json({message: "Something went wrong!"});
    }
})

// Getting average time to reimburse an expense

module.exports = router;