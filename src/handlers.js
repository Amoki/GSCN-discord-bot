const iCanHelp = require('./commands/i-can-help');
const iNeedHelp = require('./commands/i-need-help');

const commands = [iCanHelp, iNeedHelp];


function messageHandler(msg) {
  commands
    .filter(command => command.regex.test(msg.content))
    .forEach(command => command.handler(msg));
}

module.exports = {messageHandler};
