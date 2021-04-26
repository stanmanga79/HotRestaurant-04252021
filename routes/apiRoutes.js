const tableData = require("../data/tableData")
const waitListData = require("../data/waitListData")

module.exports = (app) => {

    //CRUD:  Reading Data
    app.get('/api/tables', (req, res) => res.json(tableData))

    //CRUD:  Reading Data
    app.get('/api/waitlist', (req, res) => res.json(waitListData))

    //CRUD:  Creating Data..
    app.post('/api/tables', (req, res) => {
        //INPUT
        const customer = req.body;

        //WORK
        //Goal: Add customer to either Tables array  /wait list array
        //LOGIC: Only 2 tables allowed for table array otherwise add to wait list..
        if (tableData.length < 2) {
            tableData.push(customer)
            res.json(true) // Client OUTPUT
        } else {
            waitListData.push(customer)
            res.json(false) // Client OUTPUT
        }

    })

    app.post('/api/clear', (req, res) => {
        //WORK
        tableData.length = 0;
        waitListData.length = 0;

        //OUTPUT
        res.json({ ok: true })
    })
}