const Redis = require('ioredis');

// From Dashboard to Redis
// init the data of the day by click on dashboards button.
// "clear the date's data"
// maybe we can to make here a time system that init the redis every 24h.

const conn = {
    port: 3002,
    host: "127.0.0.1",
    db: 0
};

const redis = new Redis(conn);
const channel = 'messages';

redis.on('message', (channel, message) => {
    console.log(`Received the following message from ${channel}: ${message}`);
});

redis.subscribe(channel, (error, count) => {
    if (error) {
        throw new Error(error);
    }
});








// const conn = {
//     port: 3002,
//     host: "127.0.0.1",
//     db: 0
// };


// const redis = new Redis(conn);

// const channel = 'messages';

// redis.on('message', (channel, message) => {
//     console.log(`Received the following message from ${channel}: ${message}`);
// });

// redis.subscribe(channel, (error, count) => {
//     if (error) {
//         throw new Error(error);
//     }
//     console.log(`Subscribed to ${count} channel. Listening for updates on the ${channel} channel.`);
// });