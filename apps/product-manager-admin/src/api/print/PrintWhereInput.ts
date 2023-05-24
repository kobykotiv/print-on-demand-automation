import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type PrintWhereInput = {
  id?: StringFilter;
  products?: ProductListRelationFilter;
};
