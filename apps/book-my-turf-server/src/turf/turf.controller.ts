import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TurfService } from "./turf.service";
import { TurfControllerBase } from "./base/turf.controller.base";

@swagger.ApiTags("turfs")
@common.Controller("turfs")
export class TurfController extends TurfControllerBase {
  constructor(
    protected readonly service: TurfService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
