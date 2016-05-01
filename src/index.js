
import express from 'express'


const app = express()


app.get('/', ({ ip, headers }, res) => {

  const ipaddress = (headers['x-forwarded-for'] || [0])[0] || ip

  const [ ua ] = headers['user-agent'].match(/\(([^\)]+)\)/)
  const software = ua.replace('(', '').replace(')', '')

  const [ language ] = headers['accept-language'].match(/.+(?=,)/)

  res.json({ ipaddress, language, software })
})


app.listen(process.env.PORT || 3000)
