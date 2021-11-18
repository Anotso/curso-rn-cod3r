const app = require('express')()
const db = require('./config/db')
const consign = require('consign')
const passport = require('passport')

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)
//USANDO O INTO  FAZ COM PASSE O APP PARA TODOS OS MODULOS UTILIZADOS NA APLICAÇÃO

app.db = db
app.use(passport.initialize())

app.listen(3000, () => {
    console.log('Backend executando...')
})