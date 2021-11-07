export interface RouteDefinition {
    path: string;
    requestMethod: "get" | "post" | "delete" | "options" | "put";
    methodName: string;
}

const registerMethodDecorator = (
    requestMethod: "get" | "post" | "delete" | "options" | "put"
) => {
    return (path: string): MethodDecorator => {
        return (target: any, propertyKey: string): void => {
            if (!Reflect.hasMetadata("routes", target.constructor)) {
                Reflect.defineMetadata("routes", [], target.constructor);
            }

            const routes = Reflect.getMetadata(
                "routes",
                target.constructor
            ) as Array<RouteDefinition>;

            routes.push({
                requestMethod: requestMethod,
                path,
                methodName: propertyKey,
            });

            Reflect.defineMetadata("routes", routes, target.constructor);
        };
    };
};

export const Get = registerMethodDecorator("get");
export const Post = registerMethodDecorator("post");
