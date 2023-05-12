const { SlashCommandBuilder, PermissionFlagsBits} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('kick a user')
		.addUserOption(option => option.setName('user').setDescription('The user to kick').setRequired(true))
		.addBooleanOption(option => option.setName('delete').setDescription('Delete the users messages>').setRequired(true))
		.addStringOption(option => option.setName('reason').setDescription('Reason for kick'))
		.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
	async execute(interaction) {
		const user = interaction.options.getUser('user');
		const reason = interaction.options.getString('reason') ?? 'no reason';

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

		// kick the user
		await member.kick(reason);



		const embed = {
			'title': 'Kicked',
			'description': `${member.username} has been kicked for ${reason}`,
		}

		await interaction.reply({ embeds: [embed] });

		setTimeout(() => {
			interaction.deleteReply();
		}, 50000);
	}
};