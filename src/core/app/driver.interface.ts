//TODO: SUPPORT NODE HTTP
export interface Driver {
    readonly app: any;

    initiateRoutes(array: Array<any>): void;
}
