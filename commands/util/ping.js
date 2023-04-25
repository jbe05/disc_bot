const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        interaction.reply('pinging...').then((msg) => {
            const ping = msg.createdTimestamp - interaction.createdTimestamp;
            msg.edit(`Pong! Took ${ping}ms`);
        });
    }
}