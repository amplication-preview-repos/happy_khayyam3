import { Admin as TAdmin } from "../api/admin/Admin";

export const ADMIN_TITLE_FIELD = "location";

export const AdminTitle = (record: TAdmin): string => {
  return record.location?.toString() || String(record.id);
};
