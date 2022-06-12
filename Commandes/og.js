const { hasRole, addRole } = require("../utils/roles");
module.exports.run = async(client, message, args) =>{ 
    const roleId = 963735030738341888;
    if(message.guildId != 670239141996265473) return;
    if(!hasRole(message.member,roleId)) return message.channel.send("Vous n'avez pas la permission de faire ça");
    if(message.mentions.users.size < 1) return message.channel.send("Veuillez mentionnez une personne");
    if(message.mentions.users.size > 1) return message.channel.send("Veuillez à ne mentionnez qu'une seule personne");
    if(args.length > 2) return message.channel.send("Veuillez ne pas rajouter d'information inutile");
    if(hasRole(message.mentions.members.first(),roleId)) return message.channel.send("Cet utilisateur possède déjà ce role");
    try{
        addRole(message.mentions.members.first(),roleId);
    }catch{
        message.channel.send("Une erreur est survenue");
    }

};
module.exports.help = {
    name:"og",
    help:"[The OG] > Attribut le role The OG à la personne mentionnée",
    cmd:"og <mention>",
    server:670239141996265473
}
