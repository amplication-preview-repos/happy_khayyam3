import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TurfWhereUniqueInput } from "../turf/TurfWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingWhereInput = {
  confirmed?: BooleanNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  time?: StringNullableFilter;
  turf?: TurfWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
