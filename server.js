'use strict'

const express = require('express')
const mongoDB = require('mongoDB')

const databaseURL = 'mongodb://localhost:27017'
const database = mongoDB.MongoClient(databaseURL)

const app = express()

const port = 5000

app.use(express.static('client/build/'))

app.get('/api/sensors/history', (request, response) => {
  response.json({
    data: {
      history: {
        1569952559: {
          sensors: [
            {
              name: 'Temperature',
              value: 15
            },
            {
              name: 'pH',
              value: 7
            }
          ]
        }
      }
    }
  })
})

app.get('*', (request, response) => {
  response.sendFile('client/build/index.html', { root: __dirname })
})

app.listen(port)
