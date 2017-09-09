import { createServer, Server } from 'http'

import app from './app'

const server: Server = createServer(app)
const HTTP_PORT: number = 3000

if (require.main === module) {

  server.listen(HTTP_PORT, () => console.log(
    `graphQL service listening on http://localhost:${HTTP_PORT}`)
  )

}

export default server;

