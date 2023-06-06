const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql2')

app.use(cors())
app.use(express.json())

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123123',
    database: 'bancoprojeto'
})

app.post("/cadastro", (req,res)=>{

    const values = [req.body.nome,
                   req.body.senha,
                   req.body.email            
    ]

    let SQL = "insert into usuarios ( `name`, `email`, `password`) values (?)"

    db.query(SQL, [values], (err,result)=>{
        console.log(err)
    })
})

app.get('/foto-usuario/', (req,res)=>{

    let ID = "440272"

    let SQL = 'SELECT CONVERT(`fotoPerfil` USING utf8) FROM `usuarios` WHERE id = ?'

    db.query(SQL, ID, (err, result) =>{
        if(err)console.log(err)
        else res.send(result)
    })
})

app.get("/usuarios", (req,res)=>{
    let SQL = 'SELECT * from usuarios'

    db.query(SQL, (err, result)=>{
        if(err)console.log(err)
        else res.send(result)
    })
})

app.get("/usuario/", (req, res)=>{

    let name = req.query.name

    let SQL = 'SELECT * FROM usuarios WHERE name = '+ name

    db.query(SQL,  (err, result)=>{
        if(err)console.log(err)
        else {
            console.log(result) 
            res.send(result)
        }
    })

})

app.listen(3001, ()=>{
    console.log('servidor rodando')
})