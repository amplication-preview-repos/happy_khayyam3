import { Manager } from "../manager/Manager";

export type Admin = {
  createdAt: Date;
  id: string;
  location: string | null;
  manager?: Manager | null;
  updatedAt: Date;
};
