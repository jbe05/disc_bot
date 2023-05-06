const { SlashCommandBuilder } = require('discord.js');

const gifs = [
	'https://media.tenor.com/goC3LqsCnrkAAAAC/matt-hug-hugs.gif',
	'https://media.tenor.com/-9OzjnOptmAAAAAi/machiko-rabbit.gif',
	'https://media.tenor.com/fVzK5G68cYcAAAAM/hugs-cuddle.gif',
	'https://media.tenor.com/67WN46LvhPUAAAAC/dog.gif',
	'https://media.tenor.com/UHlUX62WoBgAAAAM/raccoon-hug.gif',
	'https://media.tenor.com/37GXFIUCSgMAAAAC/hug-hugs.gif',
];
const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('hugs a person')
		.addUserOption(option => option.setName('user').setDescription('The user to hug')),
	async execute(interaction) {
		const user = interaction.options.getUser('user');
		if (user) {
			// reply with embed
			const embed = {
				'title': 'Hug',
				'description': `${interaction.user} hugged ${user}`,
				'image': {
					'url': randomGif,
				},
			};
			interaction.reply({ embeds: [embed] });
		}  else {
			interaction.reply('You hugged no one');
		}
	}
};