import { Request, Response } from "express";
import { Controller } from "../../decorators/controller";
import { Get } from "../../decorators/routing";
import { JsonResponse } from "../http";
import { Controller as ControllerAbstract } from "../../core/controllers/controller.class";

@Controller("/user")
export class UserController extends ControllerAbstract {
    @Get("/")
    public index(request: Request, response: Response) {
        return new JsonResponse("User overview");
    }

    @Get("/:name")
    public details(request: Request, response: Response) {
        return response.send(
            `You are looking at the profile of ${request.params.name}`
        );
    }
}
