const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set("json spaces", 2)
app.use(bodyParser.json())
app.use( (req, res, next) => {
    console.info(req.method, req.originalUrl)
    console.info("content", req.body)
    next();
})
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.post('/Plugin.Activate', (req, res) => {
	console.log(req.body)
	res.send({Implements: ["VolumeDriver"]})
})
app.post('/VolumeDriver.Create', (req, res) => {
	console.log(req.body)
	res.send({})
})
app.post('/VolumeDriver.Remove', (req, res) => {
	console.log(req.body)
	res.send({})
})
app.post('/VolumeDriver.Mount', (req, res) => {
	console.log(req.body)
	res.send({})
})
app.post('/VolumeDriver.Path', (req, res) => {
	console.log(req.body)
	res.send({})
})
app.post('/VolumeDriver.Unmount', (req, res) => {
	console.log(req.body)
	res.send({})
})
app.post('/VolumeDriver.Get', (req, res) => {
	console.log(req.body)
	res.send({})
})
app.post('/VolumeDriver.List', (req, res) => {
	console.log(req.body)
	res.send({})
})
app.post('/VolumeDriver.Capabilities', (req, res) => {
	console.log(req.body)
	res.send({})
})
app.post('*', (req, res) => {
  console.log(req.body)
  res.send('Gotcha: ' + req.body.message || '[missing]')
})
app.listen(4449)

