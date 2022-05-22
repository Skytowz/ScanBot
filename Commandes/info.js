const Embed = require("../utils/embed");
module.exports.run = async(client, message, args) =>{
    if(!message.member.permissions.has('ADMINISTRATOR')) return;
    let text=""; 
    for(i of args) text+=i+" ";
    let dateMsg = "";
    if(message.createdAt.getDay()<10) dateMsg+="0";
    dateMsg+=message.createdAt.getDay()+"/";
    if(message.createdAt.getMonth()+1<10) dateMsg+="0";
    dateMsg+=(message.createdAt.getMonth()+1)+"/"+message.createdAt.getFullYear();

    const msg = new Embed()
        .setColor('#0000ff')
        .setTitle('**Info**')
        .setDescription(text)
        .setFooter("Le staff : "+ message.author.username +" | " + dateMsg)
        .setThumbnail("https://cdn.ter.sncf.com/medias/Images/centre_val_de_loire/Picto%20info%20bleu_tcm56-120300_tcm56-120299_272x194.png");
        
    message.channel.send("@everyone");
    message.channel.send({
        embeds: [msg],
    });
};
module.exports.help = {
    name:"info",
    cmd:"info [message]",
    help:"> Créer un message d'information et tag everyone"
}
