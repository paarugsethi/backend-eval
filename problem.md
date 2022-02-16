# Problem
- create a backend application for REST APIs,
- use MVC, Express, Mongo
- create the following collections
- employees ( employee id, name, gender )
- expenses
    - type = internet, travel, logistics, others, food
    - date of expense
    - employee id
    - reimbursed ( boolean)
    - reimbursed date
    - timestamps
- you can add employee information from db directly
### API
- do pagination as well on all apis
- its best to do all queries from the db itself, not after querying data ( otherwise we are not utilising db the right way )
- create an expense - POST
- reimburse an expense - POST
- get all expenses raised between date 1 and date 2 - GET - sort by desc or asc date
- get all expenses grouped by type and sort by desc or asc counts- GET
- get all expenses by user id - GET
- get average time to reimburse an expense - GET
# Notes
- follow coding standards
- manage edge cases
- error handling