const { NotificationTicket } = require("../models/index");
const { Op } = require("sequelize");

class TicketRepository {

    async getAll (filter) {
        try {
            console.log(filter.status);
            const response = await NotificationTicket.findAll({
                where: {
                    notificationTime: {
                        [Op.lte]:  new Date(),
                    },
                    status: filter.status
                }
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async createTicket (data) {
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            console.log(error);
        }
    }

    async updateTicket (ticketId, data) {
        try {
            const ticket = await NotificationTicket.findByPk(ticketId);
            if(data.status)
                ticket.status = data.status;
            await ticket.save();
            return ticket;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TicketRepository;