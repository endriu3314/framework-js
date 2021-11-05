import "reflect-metadata";

import { Application } from "./core/app/application";
import { AppConfig, config } from "./core/config/config";

import { UserController } from "./http/controllers/user.controller";
import { HomeController } from "./http/controllers/home.controller";

const application = new Application([UserController, HomeController], config);
application.boot((config: AppConfig) => {
    if (config.appEnv !== "dev") {
        // start bugsnag or smth
    }
});
