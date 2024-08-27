import { ManagerWhereUniqueInput } from "../manager/ManagerWhereUniqueInput";

export type AdminCreateInput = {
  location?: string | null;
  manager?: ManagerWhereUniqueInput | null;
};
