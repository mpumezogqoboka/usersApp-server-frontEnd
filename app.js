//Loads the express module
const express = require('express');

//Creates our express server
const app = express();
const port = 3000;

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

//Loads the handlebars module
const handlebars = require('express-handlebars');

//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'planB',
    //new configuration parameter
    partialsDir: __dirname + '/views/partials/'
    }));
    users = () => {
        return [{
            'id': '1',
            'fullname': 'Mpumezo Gqoboka',
            'email': 'mpumezogqoboka@gmail.com',
            'password': '1994'
        },
        
        {
            'id': '2',
            'fullname': 'John Doe',
            'email': 'johndoe@gmail.com',
            'password': '12345'
        },

        {
            'id': '3',
            'fullname': 'David Plaatjies',
            'email': 'davidplaatjies@gmail.com',
            'password': '54321'
        }
        
    ];
    }
    app.get('/users', (req, res) => {
        res.render('main', {layout: 'index', suggestedUsers: users(), listExists: true});
        });

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));