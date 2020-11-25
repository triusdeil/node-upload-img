const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const multer = require('multer')

//establecer como guardar las imagenes
const storage = multer.diskStorage({
    destination: path.join(__dirname,('public/uploads')),
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
})
//**settings
app.set('port', 4000)

//establecer la direccion de la carpeta
//con esto informamos que la carpeta views esta en src
app.set('views', path.join(__dirname, 'views'))
//configurar el motor de las vistas

//**ejs
app.set('view engine', 'ejs')

//middleware
app.use(multer({
    storage: storage,
    dest: path.join(__dirname, 'public/uploads')
}).single('image'))

//**routes
//recibir lo que el formulario esta enviando
app.post('/upload', (req,res) =>{
    console.log(req.file)
    res.send('uploaded')
})
//manejador de peticiones
//res.render enviar pagina ejs html
app.get('/', (req,res)=>{
    res.render('index')
})

//**server

app.listen(app.get('port'),() =>{
    console.log(`server listen on port: ${app.get('port')}`)
})