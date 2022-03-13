const express = require("express");

class App {
    constructor(){
        this.app = express();
        this.routes();
        this.app.listen(3000, () =>{
            console.log("servidor trabajando en puerto 3000")
        })
    }

    routes () {
        this.app.use(require('./routes/direccionador'))
    }
}

new App();