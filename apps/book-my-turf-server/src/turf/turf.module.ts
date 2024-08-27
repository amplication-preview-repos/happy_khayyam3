import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TurfModuleBase } from "./base/turf.module.base";
import { TurfService } from "./turf.service";
import { TurfController } from "./turf.controller";
import { TurfResolver } from "./turf.resolver";

@Module({
  imports: [TurfModuleBase, forwardRef(() => AuthModule)],
  controllers: [TurfController],
  providers: [TurfService, TurfResolver],
  exports: [TurfService],
})
export class TurfModule {}
