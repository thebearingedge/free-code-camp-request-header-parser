
import express from 'express'


const app = express()


app.enable('trust proxy')


app.get('/', ({ headers, ips }, res) => {

  const [ ipaddress ] = ips

  const [ ua ] = headers['user-agent'].match(/\(([^\)]+)\)/)
  const software = ua.replace('(', '').replace(')', '')

  const [ language ] = headers['accept-language'].match(/.+(?=,)/)

  res.json({ ipaddress, language, software })
})


app.listen(process.env.PORT || 3000)
