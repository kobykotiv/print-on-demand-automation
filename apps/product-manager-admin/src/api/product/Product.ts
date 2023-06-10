import { Print } from "../print/Print";

export type Product = {
  createdAt: Date;
  id: string;
  print?: Array<Print>;
  updatedAt: Date;
};
