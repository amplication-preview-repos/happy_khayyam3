import { BookingUpdateManyWithoutTurfsInput } from "./BookingUpdateManyWithoutTurfsInput";

export type TurfUpdateInput = {
  bookings?: BookingUpdateManyWithoutTurfsInput;
  location?: string | null;
  name?: string | null;
  price?: number | null;
};
