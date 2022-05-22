const { prefix } = require("../utils/properties");

module.exports =async(client) => {

    client.user.setActivity(`${prefix}help`, { type: 'PLAYING' });
}
