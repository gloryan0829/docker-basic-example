const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Day34 Docker index!')
});

app.listen(8080, ()=>{
    console.log('listening on port 8080')
});