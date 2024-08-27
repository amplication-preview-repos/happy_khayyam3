import { AdminCreateNestedManyWithoutManagersInput } from "./AdminCreateNestedManyWithoutManagersInput";

export type ManagerCreateInput = {
  admins?: AdminCreateNestedManyWithoutManagersInput;
  location?: string | null;
  rates?: number | null;
};
