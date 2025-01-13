const express = require('express');

const app = express();

// listen forr requests
app.listen(3000);

app.get('/', (req,res) =>{

    res.send('<p>home page</p>');

});