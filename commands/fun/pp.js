const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pp')
		.setDescription('shows pp length')
		.addUserOption(option => option.setName('user').setDescription('The user to reveal their length')),
	async execute(interaction) {
		//get user from options
		const user = interaction.options.getUser('user');

		if (user) {
			// reply with embed
			const embed = {
				'title': `${user.username}'s PP Length`,
				'description': `${user}'s pp length is 8${'='.repeat(Math.floor((Math.random() * 20)))}D`,
			};
			interaction.reply({ embeds: [embed] });
		}  else {
			const embed = {
				'title': `PP Length`,
				'description': `Your pp length is 8${'='.repeat(Math.floor((Math.random() * 20)))}D`,
			}
			interaction.reply({ embeds: [embed] });
		}
	
	}
};