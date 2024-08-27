import { BookingCreateNestedManyWithoutTurfsInput } from "./BookingCreateNestedManyWithoutTurfsInput";

export type TurfCreateInput = {
  bookings?: BookingCreateNestedManyWithoutTurfsInput;
  location?: string | null;
  name?: string | null;
  price?: number | null;
};
