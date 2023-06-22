/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Print, Product } from "@prisma/client";

export class PrintServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PrintCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrintCountArgs>
  ): Promise<number> {
    return this.prisma.print.count(args);
  }

  async findMany<T extends Prisma.PrintFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrintFindManyArgs>
  ): Promise<Print[]> {
    return this.prisma.print.findMany(args);
  }
  async findOne<T extends Prisma.PrintFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrintFindUniqueArgs>
  ): Promise<Print | null> {
    return this.prisma.print.findUnique(args);
  }
  async create<T extends Prisma.PrintCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrintCreateArgs>
  ): Promise<Print> {
    return this.prisma.print.create<T>(args);
  }
  async update<T extends Prisma.PrintUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrintUpdateArgs>
  ): Promise<Print> {
    return this.prisma.print.update<T>(args);
  }
  async delete<T extends Prisma.PrintDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrintDeleteArgs>
  ): Promise<Print> {
    return this.prisma.print.delete(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<Product[]> {
    return this.prisma.print
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .products(args);
  }
}
