const express = require('express')

//initilizacions 
const app = express()

//settings
app.set('port', 4000)

//server 
app.listen(app.get('port'), () => {
    console.log(`server listening ${app.get('port')}`)
})