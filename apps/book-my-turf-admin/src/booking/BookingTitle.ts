import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "time";

export const BookingTitle = (record: TBooking): string => {
  return record.time?.toString() || String(record.id);
};
