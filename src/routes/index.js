 const express = require("express");
 const router = express.Router();

 
 
 router.get("/",(request, response) => {
    response.status(200).send({
        "titulo": "Roseiras-shopping API - Projeto Final {Reprograma}",
        "version": "1.0.0",
        "programadora": "Aline Rodrigues da Silva",
        "message": "Bem vindo a API do Roseiras <3"
    })
});

module.exports = router;