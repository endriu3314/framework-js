import express from "express";
import { RouteDefinition } from "../../decorators/routing";
import { Driver } from "./driver.interface";

export class ExpressDriver implements Driver {
    public app;

    constructor() {
        this.app = express();
    }

    public initiateRoutes = (array: Array<any>) => {
        array.forEach((controller) => {
            const instance = new controller();

            const prefix = Reflect.getMetadata("prefix", controller);

            const routes: Array<RouteDefinition> = Reflect.getMetadata(
                "routes",
                controller
            );

            routes.forEach((route) => {
                this.app[route.requestMethod](
                    prefix + route.path,
                    (request: express.Request, response: express.Response) => {
                        const _response = (instance as any)[route.methodName](
                            request,
                            response
                        );

                        if (typeof _response.getContent !== "undefined") {
                            response.send(_response.getContent());
                        }
                    }
                );
            });
        });
    };
}
