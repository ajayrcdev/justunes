import { Router } from 'express'

let router: Router = Router()

router.get('/', (req, res) => {
  res.sendStatus(200)
})

export default router




