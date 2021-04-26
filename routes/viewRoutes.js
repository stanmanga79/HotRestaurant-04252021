const path = require("path")

module.exports = (app) => {

    // Default Home / Root route
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/views/home.html')));

    app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, '../public/views/tables.html')));

    app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, '../public/views/reserve.html')));

    //Catch all / Wildcard / Not Found..
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/views/home.html')));

}