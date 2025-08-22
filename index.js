// config inicial 
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

// forma de ler JSON
app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())

// rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//  rota inicial / endpoint
app.get('/', (req, res) => {
    res.json({message: 'Oi Express'})
})


// Banco de dados e inicialização 

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.5q4xtm7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
})
.catch((err) => console.log(err))


