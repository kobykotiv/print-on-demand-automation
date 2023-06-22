import { PrintWhereInput } from "./PrintWhereInput";
import { PrintOrderByInput } from "./PrintOrderByInput";

export type PrintFindManyArgs = {
  where?: PrintWhereInput;
  orderBy?: Array<PrintOrderByInput>;
  skip?: number;
  take?: number;
};
