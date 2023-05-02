const path = require("path")
const express = require("express");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

app.get('/', (req,res)=> {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.get('/about', (req,res)=> {
    res.sendFile(path.resolve(__dirname, 'about.html'))
})
app.get('/contact', (req,res)=> {
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})
app.get('/users/:userID/movies/:moviesID', (req,res) => {
    res.send(`
    <h1> Kullanıcı Adı:${req.params.userID} </h1>
    <h1> Kullanıcı Adı:${req.params.moviesID} </h1>


    `)
})





app.listen(port, hostname, () => {
  console.log(`Server is working, http://${hostname}:${port}/`);
});
