import { UserActivity } from "./../../node_modules/expo-router/build/head/ExpoHeadModule.d";
import { string } from "yup";

enum AuthorizedUsers {
  ADMIN,
  USER,
}

export interface StoredUsers {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  baned: boolean;
  pk3: { [key: string]: boolean };
  pk4: { [key: string]: boolean };
  kg: { [key: string]: boolean };
  first: { [key: string]: boolean };
  second: { [key: string]: boolean };
  third: { [key: string]: boolean };
  fourth: { [key: string]: boolean };
  fifth: { [key: string]: boolean };
}

//TODO: Check what Record means...
// export interface StoredUsers {
//   id?: string;
//   name: string;
//   email: string;
//   password: string;
//   role: string;
//   baned: boolean;
//   pk3: Record<string, boolean>;
//   pk4: Record<string, boolean>;
//   kg: Record<string, boolean>;
//   first: Record<string, boolean>;
//   second: Record<string, boolean>;
//   third: Record<string, boolean>;
//   fourth: Record<string, boolean>;
//   fifth: Record<string, boolean>;
// }
