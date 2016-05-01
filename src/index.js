
import express from 'express'
import useragent from 'ua-parser-js'


const app = express()


app.get('/', ({ ip, headers }, res) => {

  const ipaddress = ip

  const [ ua ] = headers['user-agent'].match(/\(([^\)]+)\)/)
  const software = ua.replace('(', '').replace(')', '')

  const [ language ] = headers['accept-language'].match(/.+(?=,)/)

  res.json({ ipaddress, language, software })
})


app.listen(3000)
