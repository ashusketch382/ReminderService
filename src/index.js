const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig.js");

const { sendBasicmail } = require("./services/email-service");


const TicketController = require("./controllers/ticket-controller");
const job = require("./utils/job");
const setupAndStartServer = async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets', TicketController.create);
    app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);

        // sendBasicmail(
        //     "ashutosh389singh@gmail.com",
        //     "ashutosh389singh@gmail.com",
        //     "This is a testing email",
        //     "Hi there you are looking Gorgeous today"
        // );

        job();
    });
}

setupAndStartServer();
