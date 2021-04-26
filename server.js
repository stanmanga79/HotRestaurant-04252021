const express = require("express");
const app = express();

const PORT = parseInt(process.env.PORT) || 8080;

//Inbound JSON payloads
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//Static Resources for Clients
app.use(express.static('./public')); //Files that you ONLY want Clients (Chrome) to have access to.. 

//NOT Required but recommended.. 
// Create modular routes
require('./routes/apiRoutes')(app)
require('./routes/viewRoutes')(app)


app.listen(PORT, () => console.log(`Starting web server on port ${PORT}`))

