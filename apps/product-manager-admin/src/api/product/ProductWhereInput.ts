import { StringFilter } from "../../util/StringFilter";
import { PrintListRelationFilter } from "../print/PrintListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  print?: PrintListRelationFilter;
};
