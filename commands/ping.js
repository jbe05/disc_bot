module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, args) {
        // get the current time
        const time = Date.now();
        // send a message
        message.channel.send('Pinging...').then(sent => {
            // edit the message
            sent.edit(`Pong! Latency is ${sent.createdTimestamp - time}ms. API Latency is ${Math.round(client.ping)}ms`);
        });
    }
}