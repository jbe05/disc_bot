const TOKEN = process.env.DISCORD_TOKEN;

// create disc client with flags



// when the client is ready, run this code

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// login to Discord with your app's token
client.login(TOKEN);
