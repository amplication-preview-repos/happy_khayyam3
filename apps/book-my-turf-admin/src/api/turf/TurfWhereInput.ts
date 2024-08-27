import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TurfWhereInput = {
  bookings?: BookingListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
