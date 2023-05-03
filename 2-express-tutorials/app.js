const express = require('express')
const app = epxress();

app.get('/',(req,res)=> {
    res.json({name:'Engin'},{name:'Susan'})
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000...')
})