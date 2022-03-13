const express = require ('express');
const res = require('express/lib/response');

class Direccionador {
    constructor () {
        this.app = express();
        this.app.get('/',this.hello);

        
    }

    hello (req,res){
        res.json("hola mundo");
    }
}

module.exports = new Direccionador().app;