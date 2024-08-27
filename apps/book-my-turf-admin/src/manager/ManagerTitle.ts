import { Manager as TManager } from "../api/manager/Manager";

export const MANAGER_TITLE_FIELD = "location";

export const ManagerTitle = (record: TManager): string => {
  return record.location?.toString() || String(record.id);
};
