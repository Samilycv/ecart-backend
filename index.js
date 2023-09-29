//1. Automatically load .env file into the application
require('dotenv').config()//used to connect frontend and backend

//2. import express
const express = require('express')

//6. import cors
const cors = require('cors')

//9. import connection.js
require('./connection')

//10. import router
const router=require('./routes/router')

//3. Create an application using the express
const server = express()

//4. Define the port 
const PORT = 5000

//7. Use cors in server app
server.use(cors())
server.use(express.json()) //json is used to covert object to array
server.use(router)

//5. Run the application
server.listen(PORT, () => {
    console.log('Listening on port' + PORT);
})

//8. Define routes
server.get('/', (req, res) => {
    res.status(200).json('Ecommerce Service started');
})

