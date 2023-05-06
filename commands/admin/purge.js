const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('purge')
		.setDescription('purge messages from channel')
		.addIntegerOption(option => option.setName('number').setDescription('The number of messages to purge').setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

	async execute(interaction) {
		// Get number from optionsManageMessagesManageMessages
		const number = interaction.options.getInteger('number');

		// Purge messages that are purgable
		const messages = await interaction.channel.messages.fetch({ limit: number });
		const purgable = messages.filter(msg => !msg.pinned);
		await interaction.channel.bulkDelete(purgable);

		// Reply with embed
		const embed = {
			'title': 'Purge',
			'description': `Purged ${purgable.size} messages`,
		};

		await interaction.reply({ embeds: [embed] });

		// Delete reply after 5 seconds
		setTimeout(() => {
			interaction.deleteReply();
		}, 5000);
	},
};
