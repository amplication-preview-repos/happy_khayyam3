import { Turf } from "../turf/Turf";
import { User } from "../user/User";

export type Booking = {
  confirmed: boolean | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  time: string | null;
  turf?: Turf | null;
  updatedAt: Date;
  user?: User | null;
};
