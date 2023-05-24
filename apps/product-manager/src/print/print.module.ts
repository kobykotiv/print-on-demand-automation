import { Module } from "@nestjs/common";
import { PrintModuleBase } from "./base/print.module.base";
import { PrintService } from "./print.service";
import { PrintController } from "./print.controller";
import { PrintResolver } from "./print.resolver";

@Module({
  imports: [PrintModuleBase],
  controllers: [PrintController],
  providers: [PrintService, PrintResolver],
  exports: [PrintService],
})
export class PrintModule {}
