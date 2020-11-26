const {Router} = require('express')
 const router = Router()
 const multer = require('multer')
const path = require('path')
const uuid = require('uuid/v4')

 //establecer como guardar las imagenes
 //como y donde se va a guardar
const storage = multer.diskStorage({
    destination: path.join(__dirname,('../public/uploads')),
    filename: (req, file, cb) =>{
        cb(null, uuid() + path.extname(file.originalname).toLocaleLowerCase())
    }
})
//*middleware
 //recibir lo que el formulario esta enviando
router.post('/upload', multer({
    storage,
    dest: path.join(__dirname, 'public/uploads'),
    limits:{fileSize: 1000000}
        }).single('image'),(req,res) =>{
        const filetypes = /jpeg|png|jpg|gif/
        const mimetype = filetypes.test(file.mimetype)
        const extname = filetypes.test(path.extname(file.originalname))
        if(mimetype && extname){
            return cb(null, true)
        }
        cb("Error el archivo debe ser una imagen valida")
    res.send('uploaded')
})
//manejador de peticiones
//res.render enviar pagina ejs html
router.get('/', (req,res)=>{
    res.render('index')
})

module.exports = router