import { IAccount } from "./iaccount";
import { IUserDefaultSetting } from "./iuser-default-setting";

export interface IUser {
  firstName: string;
  fullName: string;
  email?: string | null;
  countryCode?: number | null;
  phoneNumber?: string | null;
  image: string;
  role: string;
  dateOfBirth?: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  verifiedAt?: Date | null;
  defaultSetting?: IUserDefaultSetting | null;
  accounts?: IAccount[] | null;
}

export const iuserKeys: (keyof IUser)[] = [
  "firstName",
  "fullName",
  "email",
  "countryCode",
  "phoneNumber",
  "image",
  "role",
  "dateOfBirth",
  "createdAt",
  "updatedAt",
  "defaultSetting",
  "accounts",
];

export const defaultUser: IUser = {
  firstName: "",
  fullName: "",
  image: "",
  role: "",
  createdAt: null,
  updatedAt: null,
};
