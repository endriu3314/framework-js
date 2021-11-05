import { CLIHelper } from "./CLIHelper";

export abstract class CommandClass {
    public readonly app: CLIHelper;
    public readonly name: string;
    public readonly description: string;

    public constructor(app: CLIHelper) {
        this.app = app;
    }

    abstract help(): void;

    abstract run(args: any[]): void;
}
