 export type TRole =
  | "contributor"
   | "maintainer";

 export interface IUser {
   id: number;
   name: string;
   email: string;
   password: string;
   role: TRole;
  createdAt: Date;
  updatedAt: Date;
 }

 export type TCreateUserPayload = {
   name: string;
//   email: string;
//   password: string;
// };

// export type TLoginPayload = {
//   email: string;
//   password: string;
// };

// export type TUserWithoutPassword = Omit<IUser, "password">;