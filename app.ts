import express from 'express'
import something from './src/test'
const app = express()

app.get('/', function (req, res) {
  res.send('hello world - testing: ' + something)
})

app.listen(3000)