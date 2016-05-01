
import express from 'express'


const app = express()


app.get('/', ({ ip, ips, headers }, res) => {

  const ipaddress = ip

  const [ ua ] = headers['user-agent'].match(/\(([^\)]+)\)/)
  const software = ua.replace('(', '').replace(')', '')

  const [ language ] = headers['accept-language'].match(/.+(?=,)/)

  res.json({ ipaddress, language, software, ips })
})


app.listen(process.env.PORT || 3000)
