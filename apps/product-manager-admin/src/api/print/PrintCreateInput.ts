import { InputJsonValue } from "../../types";
import { ProductCreateNestedManyWithoutPrintsInput } from "./ProductCreateNestedManyWithoutPrintsInput";

export type PrintCreateInput = {
  image?: InputJsonValue;
  products?: ProductCreateNestedManyWithoutPrintsInput;
};
