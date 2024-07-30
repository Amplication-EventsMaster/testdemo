import { Like } from "../like/Like";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  phone: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
