const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');
app.use(express.static('./public'));

app.get('/about', (req,res) => {
    // res.send('About Page');
        res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req,res) => {
    res.send({
        errorMessage: 'Unable to handle request.'
    });
});

app.get('/', (req,res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page', 
        welcomeMessage: 'Welcome to my website',
        currentYear: new Date().getFullYear()
    })
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
