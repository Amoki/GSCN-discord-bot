const config = require('../../config');

async function iCanHelp (msg) {
    const member = msg.member;
    if (!member) {
        // The message has been sent in Private Message, the sender is therefore not a member of any guild.
        // Send the message from a channel to add the role.
        return;
    }
    const helperRole = await msg.guild.roles.fetch(config.helperRoleId);
    const needHelpRole = await msg.guild.roles.fetch(config.needHelpRoleId);
    member.roles.remove(needHelpRole).catch(console.error);
    member.roles.add(helperRole).catch(console.error);
}

module.exports = {
    regex: /^\/je peux aider/i,
    handler: iCanHelp,
};
