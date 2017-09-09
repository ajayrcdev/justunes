import { Router } from 'express'
import * as multer from 'multer'

const router: Router = Router()
const upload = multer({ dest: 'uploads' })

router.get('/', (req, res) => {
  res.sendStatus(200)
})

router.post('/tune', upload.single('test'), (req, res, next) => {

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




