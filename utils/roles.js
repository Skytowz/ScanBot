module.exports.hasRole = (member,id) =>{
    return member.roles.cache.some(role => role.id == id);
}