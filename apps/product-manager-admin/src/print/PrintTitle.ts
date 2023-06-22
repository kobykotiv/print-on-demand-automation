import { Print as TPrint } from "../api/print/Print";

export const PRINT_TITLE_FIELD = "id";

export const PrintTitle = (record: TPrint): string => {
  return record.id || String(record.id);
};
