import { CLIHelper } from "../core/cli/CLIHelper";
import { CommandClass } from "../core/cli/command.class";

export class TestCommand extends CommandClass {
    public name = "test";
    public description = "Print test";

    constructor(helper: CLIHelper) {
        super(helper);
    }

    public help() {
        this.app.colorLog(this.description);
    }

    public run(args: any[]) {
        this.app.colorLog(
            `Test ${args}`,
            this.app.colors.ForegroundColors.Yellow,
            this.app.colors.BackgroundColors.Green
        );
    }
}
