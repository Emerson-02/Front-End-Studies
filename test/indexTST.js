const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')


// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Conexão com o banco de dados MySql
        const sequelize = new Sequelize('test', 'root', 'Er77545589', {
            host: "localhost",
            dialect: 'mysql'
        })

app.listen(8081, function(){
    console.log("Servidor Rodando")
})

/*
app.get("/", function(req, res){
    res.sendFile('E:/users/Asus/Documents/curso-web-moderno/css/display.html')
})

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre")
})

app.get("/blog", function(req, res){
    res.send("bem-vindo ao meu blog")
})

app.get("/ola/:nome/:cargo", function(req, res){
    res.send(`<h1>Ola, ${req.params.nome}</h1>`)
})
*/
