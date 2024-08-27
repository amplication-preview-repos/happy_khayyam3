import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TurfServiceBase } from "./base/turf.service.base";

@Injectable()
export class TurfService extends TurfServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
