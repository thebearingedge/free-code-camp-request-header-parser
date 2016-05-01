
import express from 'express'


const app = express()


app.enable('trust proxy')


app.get('/', ({ ip, headers, ips }, res) => {

  const ipaddress = (headers['x-forwarded-for'] || [0])[0] || ip

  const [ ua ] = headers['user-agent'].match(/\(([^\)]+)\)/)
  const software = ua.replace('(', '').replace(')', '')

  const [ language ] = headers['accept-language'].match(/.+(?=,)/)

  res.json({ ipaddress, language, software, ips })
})


app.listen(process.env.PORT || 3000)
