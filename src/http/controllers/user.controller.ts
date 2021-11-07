import { Request, Response } from "express";
import { Controller } from "../../core/http/controllers/controller.decorator";
import { Get } from "../../core/router/routing.decorator";
import { JsonResponse } from "../../core/http/response/json.response";
import { Controller as ControllerAbstract } from "../../core/http/controllers/controller.class";

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
