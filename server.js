const express = require('express');

const app = express();

// register view engine
app.set('view engine', 'ejs')

// listen forr requests
app.listen(3000);
const blogs= [ {title: 'yoshi finds eggs',snippet:'deii ini nin nu nun unoitjionv ini nio nin ion ono nn o n'},
    {title: 'mario finds stars',snippet:'deii ini nin nu nun unoitjionv ini nio nin ion ono nn o n'},
    {title: 'bowser wins ',snippet:'deii ini nin nu nun unoitjionv ini nio nin ion ono nn o n'}
    ];
app.get('/', (req,res) =>{

  
    res.render('index', { title:'welcome', blogs});
 
});
app.get('/about', (req,res) =>{

    res.render('about',{ title: 'about us',blogs });
});

app.get('/create' , (req, res) => {
    res.render('create',{ title: 'add new',blogs });
});

app.use((req,res) => {
    res.status(404).render('404');
});