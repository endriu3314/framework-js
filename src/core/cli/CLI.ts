import { CommandClass } from "./command.class";
import { CLIHelper } from "./CLIHelper";

export class CLI {
    public readonly printer: CLIHelper;
    public readonly commandsRegistry: CommandClass[];

    constructor(commands: any[]) {
        this.printer = new CLIHelper();
        this.commandsRegistry = commands;
    }

    addCommand(command: CommandClass) {
        this.commandsRegistry.push(command);
    }

    help(_command: string) {
        let commandFound: boolean = false;

        this.commandsRegistry.forEach((command) => {
            //@ts-ignore
            const _class = new command(this.printer) as CommandClass;

            if (_class.name == _command) {
                commandFound = true;
                this.printer.colorLog("");
                _class.help();
            }
        });

        if (!commandFound) {
            this.printer.colorLog(
                `Command ${_command} not found`,
                this.printer.colors.ForegroundColors.Blue
            );
        }
    }

    printAvailableCommands() {
        this.commandsRegistry.forEach((command) => {
            //@ts-ignore
            const _class = new command(this.printer) as CommandClass;

            this.printer.colorLogInline(
                `• ${_class.name}`,
                this.printer.colors.ForegroundColors.Green
            );
            this.printer.colorLogInline(" - ");
            this.printer.colorLog(_class.description);
        });
    }
}
