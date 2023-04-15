export interface IAccount {
  provider: string;
  accessToken: string;
  refreshToken: string;
  expiredAt?: Date | null;
  tokenType: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export const iaccountKeys: (keyof IAccount)[] = [
  "provider",
  "accessToken",
  "refreshToken",
  "expiredAt",
  "tokenType",
  "createdAt",
  "updatedAt",
];

export const defaultAccount: IAccount = {
  provider: "",
  accessToken: "",
  refreshToken: "",
  tokenType: "",
  createdAt: null,
  updatedAt: null,
};
