#!/usr/bin/env node
import { CommandClass } from "./core/cli/command.class";
import { CLI } from "./core/cli/CLI";

/**
 * Import all commands here
 */
import { HelloCommand } from "./commands/hello.command";
import { TestCommand } from "./commands/test.command";

const args = process.argv.slice(2);
const requestedCommand = args[0] ?? undefined;
let commandFound: boolean = false;

const cli = new CLI([HelloCommand, TestCommand]);

if (requestedCommand == undefined) {
    cli.printer.colorLog("Available commands:");
    cli.printAvailableCommands();
    commandFound = true;
}

if (requestedCommand != undefined) {
    cli.commandsRegistry.forEach((command) => {
        //@ts-ignore
        const _class = new command(cli.printer) as CommandClass;

        if (_class.name != requestedCommand) {
            return;
        }

        commandFound = true;
        _class.run(args.slice(1));
    });
}

if (requestedCommand == "help") {
    const commandName = args[1] ?? undefined;

    if (commandName == undefined) {
        commandFound = false;
    }

    if (commandName != undefined) {
        cli.help(commandName);
        commandFound = true;
    }
}

if (!commandFound) {
    cli.printer.colorLog(
        `Command ${requestedCommand} not found`,
        cli.printer.colors.ForegroundColors.Blue
    );
}
