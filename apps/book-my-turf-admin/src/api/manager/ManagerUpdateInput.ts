import { AdminUpdateManyWithoutManagersInput } from "./AdminUpdateManyWithoutManagersInput";

export type ManagerUpdateInput = {
  admins?: AdminUpdateManyWithoutManagersInput;
  location?: string | null;
  rates?: number | null;
};
