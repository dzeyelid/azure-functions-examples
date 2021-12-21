const { ServiceBusClient } = require("@azure/service-bus");
const dayjs = require("dayjs");

module.exports = async function (context, req) {
  const connectionString = process.env.SERVICEBUS_CONNECTION_STRING_TO_SEND;
  const queueName = process.env.QUEUE_NAME;

  if (!req.body || !req.body.body || !req.body.secondsToDelay) {
    context.res = {
      status: 400,
      body: "Missing `body` or `secondsToDelay` parameters in the request body."
    }
  }

  const { secondsToDelay, body } = req.body;

  try {
    const sbClient = new ServiceBusClient(connectionString);
    const sender = sbClient.createSender(queueName);
  
    const message = {
      body,
      subject: "Schedule Message",
    };
    const scheduledTimeUtc = dayjs().add(secondsToDelay, "second").toDate();

    await sender.scheduleMessages(message, scheduledTimeUtc);

    context.res = {
      status: 201,
      body: message,
    }
  } catch (err) {
    context.log(err);
    context.res = {
      status: 500,
      body: err
    };
  }
}