import { SortOrder } from "../../util/SortOrder";

export type ManagerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  rates?: SortOrder;
  updatedAt?: SortOrder;
};
