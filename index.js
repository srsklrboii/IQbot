const Discord = require("discord.js")
const PREFIX = ">";

var bot = new Discord.Client()

bot.on('ready', () => {
    console.log("IQbot ready.")
    bot.user.setActivity("online")
    bot.user.setActivity("for >help", {type: 'WATCHING'})
})

bot.on('guildMemberAdd', function(member) {
    var general = member.guild.channels.find("name", "welcome-bye")
    general.send(`Hey there ${member}! Welcome to IQhub! :tada: Make sure to read the rules ( #rules ) and learn how to get a whitelist ( #how-to-get-an-iqhub-whitelist )!`)
    var memberrole = member.guild.roles.find("name", "Member (trusted)")
    member.addRole(memberrole)
})

bot.on('guildMemberRemove', function(nonmember) {
    var general = nonmember.guild.channels.find("name", "welcome-bye")
    general.send(`Why did ${nonmember} have to leave?! Goodbye, skrub...`)
})

bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;
    if (message.channel.type === "dm") return message.author.send("Please use this command in IQhub!")

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
        message.channel.send(`Pong! it took ${(int)bot.ping}ms to send this message!`)
        break;

        case "help":
        message.channel.send(message.author + ", help commands are in your dms in case you can't remember jackshit about the commands, theres only like 2.")
        message.author.send("There's only like two commands so ye\n\n``>help``: shows this shit.\n``>ping``: pings.")
        break;
    }
})
bot.login(process.env.TOKEN)
