const app = require('express')()
const db = require('./config/db')
const consign = require('consign')

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)
//USANDO O INTO  FAZ COM PASSE O APP PARA TODOS OS MODULOS UTILIZADOS NA APLICAÇÃO

app.db = db

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
}) 

app.listen(3000, () => {
    console.log('Backend executando...')
})