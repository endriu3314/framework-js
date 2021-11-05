import { AppConfig } from "../config/config";
import { Driver } from "./driver.interface";
import { ExpressDriver } from "./express.driver";

export class Application {
    public routes: Array<any>;
    public driver: Driver;
    public config;

    constructor(routes: Array<any>, config: AppConfig) {
        this.routes = routes;
        this.config = this.validateConfig(config);
    }

    private validateConfig = (_config: AppConfig): AppConfig => {
        if (!_config.appEnv) {
            console.warn("App environment not set");
            _config.appEnv = "prod";
        }

        if (!_config.serverPort) {
            console.warn("Port not set, default to: 3000");
            _config.serverPort = "3000";
        }

        if (!_config.serverDriver) {
            throw new Error("Server driver not set");
        }

        return _config;
    };

    public boot = (callback: (config: AppConfig) => void): void => {
        callback(this.config);

        if (this.config.serverDriver != "express") {
            throw new Error(
                `Server driver [${this.config.serverDriver}] not supported yet`
            );
        }

        this.driver = new ExpressDriver();

        this.driver.initiateRoutes(this.routes);
        this.driver.app.listen(this.config.serverPort, () => {
            console.log(`Server running on port ${this.config.serverPort}`);
        });
    };
}
