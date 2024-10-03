import express from 'express'
import http from 'http'
import createGame from './public/game.js'

const app = express()
const server = http.createServer(app)

app.use(express.static('public'))

const game = createGame()

game.start()

server.listen(3000, () => {
    console.log('listening on port: 3000')
})