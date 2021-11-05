import {
    ANSIColors,
    BackgroundColors,
    Commands,
    ForegroundColors,
} from "./ANSIColors";

export class CLIHelper {
    public readonly colors;

    constructor() {
        this.colors = ANSIColors;
    }

    colorLog(
        toLog: any,
        FgColor: ForegroundColors = this.colors.ForegroundColors.White,
        BgColor: BackgroundColors = this.colors.BackgroundColors.Transparent,
        Commands: Commands = this.colors.Commands.Bright
    ): void {
        console.log(
            `${FgColor}${BgColor}${Commands}${toLog}${this.colors.Commands.Reset}`
        );
    }

    colorLogInline(
        toLog: any,
        FgColor: ForegroundColors = this.colors.ForegroundColors.White,
        BgColor: BackgroundColors = this.colors.BackgroundColors.Transparent,
        Commands: Commands = this.colors.Commands.Bright
    ): void {
        process.stdout.write(
            `${FgColor}${BgColor}${Commands}${toLog}${this.colors.Commands.Reset}`
        );
    }
}
