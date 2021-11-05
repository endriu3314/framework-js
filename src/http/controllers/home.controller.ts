import { Request, Response } from "express";
import { Controller } from "../../decorators/controller";
import { Get } from "../../decorators/routing";
import { JsonResponse } from "../http";
import { Controller as ControllerAbstract } from "../../core/controllers/controller.class";

@Controller("/")
export class HomeController extends ControllerAbstract {
    @Get("/")
    public index(request: Request, response: Response) {
        return new JsonResponse("Home overview");
    }
}
