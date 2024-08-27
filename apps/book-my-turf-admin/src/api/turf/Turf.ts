import { Booking } from "../booking/Booking";

export type Turf = {
  bookings?: Array<Booking>;
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
