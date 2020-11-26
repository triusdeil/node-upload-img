const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')



//**settings
app.set('port', 4000)

//establecer la direccion de la carpeta
//con esto informamos que la carpeta views esta en src
app.set('views', path.join(__dirname, 'views'))
//configurar el motor de las vistas

//**ejs
app.set('view engine', 'ejs')

//Static files
app.use(express.static(path.join(__dirname,'public')))

//**routes
app.use(require('./routes/routes'))
//**server

app.listen(app.get('port'),() =>{
    console.log(`server listen on port: ${app.get('port')}`)
})

