module.exports = async function(context, mySbMsg) {
  context.log('Node.js ServiceBus queue trigger function processed message', mySbMsg);
  context.log('EnqueuedTimeUtc =', context.bindingData.enqueuedTimeUtc);
  context.log('DeliveryCount =', context.bindingData.deliveryCount);
  context.log('MessageId =', context.bindingData.messageId);
};