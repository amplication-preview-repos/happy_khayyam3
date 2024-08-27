import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ManagerWhereUniqueInput } from "../manager/ManagerWhereUniqueInput";

export type AdminWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  manager?: ManagerWhereUniqueInput;
};
