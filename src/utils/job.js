const cron = require("node-cron");
const sender = require("../config/emailConfig");

const emailService = require("../services/email-service");
const scheduledJob = () => {
    cron.schedule('*/0.1 * * * *', async () => {
      const tickets = await emailService.fetchPendingEmails();
      tickets.forEach(email => {
        sender.sendMail({
          to: email.recipientEmail,
          subject: email.subject,
          text: email.content
        }, async (err, data) => {
          if(err)
            console.log(err);
          else{
            console.log(data);
            await emailService.updateTicket(email.id, {status: "SUCCESS"});
          }
        });
      });
      });
}

module.exports = scheduledJob;