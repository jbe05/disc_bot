const fs = require("fs");

//get the command name from the --name argument
const commandName = process.argv[2] + ".js";


//create the file to the commands folder
const createStream = fs.createWriteStream("./commands/" + process.argv[4] + "/" + commandName);

//write the command template to the file
createStream.write("" +
    "const { SlashCommandBuilder } = require('discord.js');\n\n" +
    "module.exports = {\n\t" +
        "data: new SlashCommandBuilder()\n\t\t" +
            ".setName('" + process.argv[2] + "')\n\t\t" +
            ".setDescription('" + process.argv[3] + "'),\n\t" +
        "async execute(interaction) {\n" +
            "\t\n" +
        "}\n" +
    "};"
);

createStream.end();