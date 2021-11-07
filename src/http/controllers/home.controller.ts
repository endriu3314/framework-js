import { Request, Response } from "express";
import { Controller } from "../../core/http/controllers/controller.decorator";
import { Get } from "../../core/router/routing.decorator";
import { JsonResponse } from "../../core/http/response/json.response";
import { Controller as ControllerAbstract } from "../../core/http/controllers/controller.class";

@Controller("/")
export class HomeController extends ControllerAbstract {
    @Get("/")
    public index(request: Request, response: Response) {
        return new JsonResponse("Home overview");
    }
}
