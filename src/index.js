const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig.js");

const setupAndStartServer = async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);
    });
}

setupAndStartServer();
