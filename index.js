const express = require('express');
const app = express();
const db = require('./Database/mySql');

app.use(express.json());
app.use('/',require('./routes/authRoutes'));

app.listen(8001,() => {
    console.log("Server Connected at port 8001");
    db.connect((err) => {
        if (err) throw err;
        console.log("DB connected sucessfully");
    })
})
