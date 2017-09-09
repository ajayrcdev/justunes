import { Router } from 'express'
import * as multer from 'multer'
import * as cors from 'cors'

const router: Router = Router()

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, 'uploads')
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

router.get('/', (req, res) => {
  res.sendStatus(200)
})

router.post('/tune', cors(), upload.single('tune'), (req, res) => {

  if (!req.file) {
    console.log("No file received")
    return res.send({
      success: false
    })

  } else {
    console.log('file received')
    return res.send({
      success: true
    })
  }
})

export default router




