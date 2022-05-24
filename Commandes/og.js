const { hasRole } = require("../utils/roles");
module.exports.run = async(client, message, args) =>{ 
    const role = 963735030738341888;
    if(message.guildId != 942011901653696543) return;
    if(!hasRole(message.member,role)) return message.channel.send("Vous n'avez pas la permission de faire ça");
    if(message.mentions.users.size < 1) return message.channel.send("Veuillez mentionnez une personne");
    if(message.mentions.users.size > 1) return message.channel.send("Veuillez à ne mentionnez qu'une seule personne");
    if(args.length > 2) return message.channel.send("Veuillez ne pas rajouter d'information inutile");
    if(hasRole(message.mentions.members.first(),role)) return message.channel.send("Cet utilisateur possède déjà ce role");
    message.mentions.members.first().roles.add(message.guild.roles.cache.find(role => role.id == role));

};
module.exports.help = {
    name:"og",
    help:"[The OG] > Attribut le role The OG à la personne mentionnée",
    cmd:"og <mention>",
    server:942011901653696543
}
