import { CLIHelper } from "../core/cli/CLIHelper";
import { CommandClass } from "../core/cli/command.class";

export class HelloCommand extends CommandClass {
    public name = "hello";
    public description = "Print hello world";

    constructor(helper: CLIHelper) {
        super(helper);
    }

    public help() {
        this.app.colorLog(this.description);
    }

    public run(args: any[]) {
        this.app.colorLog("Hello World", this.app.colors.ForegroundColors.Red);
        console.log(args);
    }
}
