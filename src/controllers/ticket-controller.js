const TicketService = require("../services/email-service");

const create = async (req,res) => {
    try {
        const response = await TicketService.createTicket(req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully created the ticket",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Couldn't create the ticket",
            err: error
        });
    }
}

module.exports = {
    create
}