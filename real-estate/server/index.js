const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const createError = require('http-errors');


const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const schedule = require('./routes/api/scheduleRoutes');

app.use('/api/schedule', schedule);


const port  = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({error: err});
});

module.exports = app;
//==================
//==DATABASE SETUP==
//==================

function setUpDatabase() {
    //DB Config
    const db = require('../config/key').mongoURI;

    //Get a reference to  the mongoose data model package
    const mongoose  = require('mongoose');

    // Actually connect to the database
    mongoose.connect(db, {useNewUrlParser: true}).then(
        () => {
            console.log("Successfully connected to the database.");
        },
        err=> {
            console.log('ERROR connect to the database.');
            throw err;
        }
    );
}

setUpDatabase();