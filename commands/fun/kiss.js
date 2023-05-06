const { SlashCommandBuilder } = require('discord.js');

const gifs = [
	'https://media.tenor.com/PS6medrGxqwAAAAd/cat-kiss.gif',
];
const randomGifs = gifs[Math.floor(Math.random() * gifs.length)];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kiss')
		.setDescription('kiss a person')
		.addUserOption(option => option.setName('user').setDescription('The user to kiss')),
	async execute(interaction) {
		const user = interaction.options.getUser('user');
		if (user) {
			// reply with embed
			const embed = {
				'title': 'Kiss',
				'description': `${interaction.user} kissed ${user}`,
				'image': {
					'url': randomGifs,
				},
			};
			interaction.reply({ embeds: [embed] });
		}  else {
			interaction.reply('You kiss no one');
		}
	}
};