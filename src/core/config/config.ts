import * as dotenv from "dotenv";
import * as packageJson from "../../../package.json";

dotenv.config();

export type AppConfig = {
    appEnv: string;
    versionNumber: string;
    serverPort: string;
    serverDriver: string;
};

export let config: AppConfig = {
    appEnv: process.env.NODE_ENV,
    versionNumber: packageJson.version,
    serverDriver: process.env.SERVER_DRIVER,
    serverPort: process.env.SERVER_PORT,
};
