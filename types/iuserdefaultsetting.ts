export interface IUserDefaultSetting {
  locale: string;
  currency: string;
}

export const iuserDefaultSettingKeys: (keyof IUserDefaultSetting)[] = [
  "locale",
  "currency",
];

export const defaultUserDefaultSetting: IUserDefaultSetting = {
  locale: "",
  currency: "",
};
