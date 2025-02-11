const express = require('express')
const corsProxy = require('@isomorphic-git/cors-proxy/middleware.js')
const service = require('@isomorphic-git/cors-proxy')
const helmet = require('helmet')
const cors = require("cors");

const port = process.env.PORT
const options = {
  origin: '*'
  // insecure_origins: ['']
}

const app = express()
app.use(corsProxy(options))
app.use(cors())
app.use(helmet())
// Alternatively, app.use(service)

app.get('/', (_req, res, _next) => {
  res.send('cors proxy')
})

const rkUrl = process.env.RUNKIT_ENDPOINT_URL
console.log(`You can test by running:
$ npx isomorphic-git clone --corsProxy="RUNKIT_ENDPOINT_URL" --url="https://github.com/isomorphic-git/isomorphic-git.git"
Redirects are not supported, so you'll need the root endpoint url...  not the one that ends with a path and starts with runkit.io, but the one that ends with runkit.sh.
You can find out what your endpoint url is by visiting ${rkUrl}

It should look something like "https://untitled-123abc.runkit.sh"
DO NOT add a forward slash at the end!
`)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
