const commands = require('./lib/commands');
const helper = require('./lib/helper')
/*
 * Handler de entrada dos comandos
 */
exports.handler = function(event, context, callback) {
    console.log("EVENTO DE ENTRADA:", event);

    var ev = helper.getQueryParameters(event.body);
    var action = processCommands(ev);

    console.log("SAÍDA:", action);

    callback(null, action);
}

/**
 * Process Commands
 *
 * @param {object} event AWS Lambda Event
 * @return {object} Request Promise
 */
function processCommands(event) {
    
    console.log(event);

    if (event && event.command) {
        var command = decodeURIComponent(event.command.trim()).replace("/", "");
        console.log("Comando executado: ", command, commands[command]);     
        return commands[command]("ae");
    }

    return commands.error('Event not specified');
}