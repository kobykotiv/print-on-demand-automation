/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PrintWhereUniqueInput } from "../../print/base/PrintWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PrintCreateNestedManyWithoutProductsInput {
  @Field(() => [PrintWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PrintWhereUniqueInput],
  })
  connect?: Array<PrintWhereUniqueInput>;
}

export { PrintCreateNestedManyWithoutProductsInput as PrintCreateNestedManyWithoutProductsInput };
