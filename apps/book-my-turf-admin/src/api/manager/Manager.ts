import { Admin } from "../admin/Admin";

export type Manager = {
  admins?: Array<Admin>;
  createdAt: Date;
  id: string;
  location: string | null;
  rates: number | null;
  updatedAt: Date;
};
