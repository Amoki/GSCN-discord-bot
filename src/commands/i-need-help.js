const config = require('../../config');

async function iNeedHelp(msg) {
    const member = msg.member;
    if (!member) {
        // The message has been sent in Private Message, the sender is therefore not a member of any guild.
        // Send the message from a channel to add the role.
        return;
    }
    const role = await msg.guild.roles.fetch(config.needHelpRoleId);
    member.roles.add(role).catch(console.error);
}

module.exports = {
    regex: /^\/j'ai besoin d'aide/i,
    handler: iNeedHelp,
};
