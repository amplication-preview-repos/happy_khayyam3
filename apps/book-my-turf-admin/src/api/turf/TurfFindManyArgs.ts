import { TurfWhereInput } from "./TurfWhereInput";
import { TurfOrderByInput } from "./TurfOrderByInput";

export type TurfFindManyArgs = {
  where?: TurfWhereInput;
  orderBy?: Array<TurfOrderByInput>;
  skip?: number;
  take?: number;
};
