const { SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mute')
		.setDescription('mute a user')
		.addUserOption(option => option.setName('user').setDescription('The user to mute').setRequired(true))
		.addStringOption(option => option.setName('reason').setDescription('Reason for ban'))
		.addIntegerOption(option => option.setName('duration').setDescription('Duration in hours to ban'))
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),
	async execute(interaction) {
		const user = interaction.options.getUser('user');
		const reason = interaction.options.getString('reason');
		const duration = interaction.options.getInteger('duration');

		const member = await interaction.guild.members.fetch(user.id);

		const role = interaction.guild.roles.find

	}
};