import { ManagerWhereUniqueInput } from "../manager/ManagerWhereUniqueInput";

export type AdminUpdateInput = {
  location?: string | null;
  manager?: ManagerWhereUniqueInput | null;
};
