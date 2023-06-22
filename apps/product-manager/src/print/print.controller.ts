import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PrintService } from "./print.service";
import { PrintControllerBase } from "./base/print.controller.base";

@swagger.ApiTags("prints")
@common.Controller("prints")
export class PrintController extends PrintControllerBase {
  constructor(
    protected readonly service: PrintService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
