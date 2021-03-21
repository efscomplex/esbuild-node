import express from 'express'
import html from './app'
const app = express()

console.log(html)

app.use('*', (_, res) => {
	res.send(html)
})
app.listen(3000, () => {
	console.log('server listen on port 3000!')
})
