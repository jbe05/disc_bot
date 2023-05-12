const { SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('ban a user')
		.addUserOption(option => option.setName('user').setDescription('The user to ban').setRequired(true))
		.addStringOption(option => option.setName('reason').setDescription('Reason for ban'))
		.addIntegerOption(option => option.setName('duration').setDescription('Duration in hours to ban'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(interaction) {
		const user = interaction.options.getUser('user');
		const reason = interaction.options.getString('reason') ?? 'no reason';
		const duration = interaction.options.getInteger('duration') ?? 24;

		const member = await interaction.guild.members.fetch(user.id);

		// get all messages from the user and delete them
		if (interaction.options.getBoolean('delete')) {
			const messages = await interaction.channel.messages.fetch({ limit: 100 });
			const purgable = messages.filter(msg => msg.author.id === user.id);
			console.log(purgable.size);
			await interaction.channel.bulkDelete(purgable);
		}

		// send the user a dm with the reason for kick
		await user.send(`You have been kicked for ${reason}`);

		await member.ban({ deleteMessageSeconds: 60 * 60 * 24 * 7, reason: reason }).then(() => {
			const embed = {
				'name': 'BAN',
				'description': `${member.username} has been banned for ${reason}. This ban lasts for ${duration} hours`
			}

			interaction.reply({ embeds: [embed] }).then(() => {
				setTimeout(() => {
					interaction.deleteReply();
				}, 5000);
			});
		});
	}
};