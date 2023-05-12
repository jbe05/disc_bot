const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('purge')
		.setDescription('purge messages from channel')
		.addIntegerOption(option => option.setName('number').setDescription('The number of messages to purge').setRequired(true))
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

	async execute(interaction) {
		const number = interaction.options.getInteger('number');

		const messages = await interaction.channel.messages.fetch({ limit: number });
		const purgable = messages.filter(msg => !msg.pinned);
		await interaction.channel.bulkDelete(purgable);

		const embed = {
			'title': 'Purge',
			'description': `Purged ${purgable.size} messages`,
		};

		await interaction.reply({ embeds: [embed] });

		setTimeout(() => {
			interaction.deleteReply();
		}, 5000);
	},
};
