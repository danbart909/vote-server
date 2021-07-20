const { Expo } = require('expo-server-sdk')

const notificationService = {

  setNotification(expoPushToken) {
    let expo = new Expo();

    let messages = []
    messages.push({
      to: expoPushToken,
      title: 'Notification from PollBooth',
      body: 'Test Notification',
      data: { withSome: 'data' }
    })

    console.log(messages)

    let chunks = expo.chunkPushNotifications(messages);
    let tickets = [];

    (async () => {
      for (let chunk of chunks) {
        try {
          let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
          console.log('Expo - ticketChunk', ticketChunk);
          tickets.push(...ticketChunk);
          // NOTE: If a ticket contains an error code in ticket.details.error, you must handle it appropriately. The error codes are listed in the Expo documentation: https://docs.expo.io/push-notifications/sending-notifications/#individual-errors
        } catch (error) {
          console.error('Expo - error @ notifications', error);
        }
      }
    })();

    let receiptIds = [];
      for (let ticket of tickets) {
        // NOTE: Not all tickets have IDs; for example, tickets for notifications that could not be enqueued will have error information and no receipt ID.
        if (ticket.id) {
          receiptIds.push(ticket.id);
        }
      }

    let receiptIdChunks = expo.chunkPushNotificationReceiptIds(receiptIds);
    (async () => {
      // Like sending notifications, there are different strategies you could use to retrieve batches of receipts from the Expo service.
      for (let chunk of receiptIdChunks) {
        try {
          let receipts = await expo.getPushNotificationReceiptsAsync(chunk);
          console.log('Expo - receipts', receipts);

          // The receipts specify whether Apple or Google successfully received the
          // notification and information about an error, if one occurred.
          for (let receiptId in receipts) {
            let { status, message, details } = receipts[receiptId];
            console.log(status, message, details)
            if (status === 'ok') {
              continue;
            } else if (status === 'error') {
              console.error(
                `There was an error sending a notification: ${message}`
              );
              if (details && details.error) {
                // The error codes are listed in the Expo documentation:
                // https://docs.expo.io/push-notifications/sending-notifications/#individual-errors
                // You must handle the errors appropriately.
                console.error(`The error code is ${details.error}`);
              }
            }
          }
        } catch (error) {
          console.error('notification error', error);
        }
      }
    })();
  },

}

module.exports = notificationService