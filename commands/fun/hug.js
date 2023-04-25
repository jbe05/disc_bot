const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('hugs a person')
		.addUserOption(option => option.setName('user').setDescription('The user to hug')),
	async execute(interaction) {
		const user = interaction.options.getUser('user');
		if (user) {
			interaction.reply(`You hugged ${user.username}`);
		} else {
			interaction.reply('You hugged no one');
		}
	}
};