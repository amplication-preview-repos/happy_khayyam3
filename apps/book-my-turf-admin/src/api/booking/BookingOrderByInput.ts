import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  confirmed?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  time?: SortOrder;
  turfId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
