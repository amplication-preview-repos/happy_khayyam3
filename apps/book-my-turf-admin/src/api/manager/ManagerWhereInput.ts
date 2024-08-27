import { AdminListRelationFilter } from "../admin/AdminListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ManagerWhereInput = {
  admins?: AdminListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  rates?: FloatNullableFilter;
};
