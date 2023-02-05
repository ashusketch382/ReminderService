const nodemailer = require("nodemailer");

const { EMAIL_ID, EMAIL_PASS } = require("../config/serverConfig.js");
const sender = nodemailer.createTransport({ // creating transport
    service: "Gmail",
    auth: {
        user: EMAIL_ID,
        pass: EMAIL_PASS
    }
});

module.exports = sender;