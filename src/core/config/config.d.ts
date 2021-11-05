declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "dev" | "prod";
            SERVER_DRIVER: "express" | "http";
            SERVER_PORT: number;
        }
    }
}

export {};
