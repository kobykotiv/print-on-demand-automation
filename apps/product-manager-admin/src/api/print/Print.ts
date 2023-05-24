import { JsonValue } from "type-fest";
import { Product } from "../product/Product";

export type Print = {
  createdAt: Date;
  id: string;
  image: JsonValue;
  products?: Array<Product>;
  updatedAt: Date;
};
