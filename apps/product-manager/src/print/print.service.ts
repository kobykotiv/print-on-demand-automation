import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrintServiceBase } from "./base/print.service.base";

@Injectable()
export class PrintService extends PrintServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
