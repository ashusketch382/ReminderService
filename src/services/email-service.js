const sender = require("../config/emailConfig");

const { TicketRepository } = require("../repository/index");
const ticketRepository = new TicketRepository();
const sendBasicmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

const fetchPendingEmails = async () => {
    try {
        const response = await ticketRepository.getAll({status: "PENDING"});
        return response;
    } catch (error) {
        console.log(error);
    }
}

const createTicket = async (data) => {
    try {
        const ticket = await ticketRepository.createTicket(data);
        return ticket;
    } catch (error) {
        console.log(error);
    }
}

const updateTicket = async (ticketId, data) => {
    try {
        const ticket = await ticketRepository.updateTicket(ticketId, data);
        return ticket;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendBasicmail,
    fetchPendingEmails,
    createTicket,
    updateTicket
}