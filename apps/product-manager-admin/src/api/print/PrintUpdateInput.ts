import { InputJsonValue } from "../../types";
import { ProductUpdateManyWithoutPrintsInput } from "./ProductUpdateManyWithoutPrintsInput";

export type PrintUpdateInput = {
  image?: InputJsonValue;
  products?: ProductUpdateManyWithoutPrintsInput;
};
