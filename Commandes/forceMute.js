const { isAdmin } = require("../utils/roles");

module.exports.run = async(client, message, args) =>{      
    if(!isAdmin(message.member)) return message.channel.send("Vous n'avez pas la permission de faire ça");
    if(message.mentions.users.size < 1) return message.channel.send("Veuillez mentionnez une personne");
    if(message.mentions.users.size > 1) return message.channel.send("Veuillez à ne mentionnez qu'une seule personne");
    if(args.length > 2) return message.channel.send("Veuillez ne pas rajouter d'information inutile");
    const mutedUser = message.mentions.users.first();
    if(this.mutedUsers.includes(mutedUser)){
        this.mutedUsers = this.mutedUsers.filter((value) => value.id != mutedUser.id);
    }else{
        this.mutedUsers.push(message.mentions.users.first());
    }
};

module.exports.mutedUsers = [];

module.exports.help = {
    name:"forcemute",
    help:"> [ADMIN] Mute de force un membre",
    cmd:"fm <mention>"
}
