export interface ICountry {
  iso: string;
  iso_3?: string | null;
  name: string;
  numCode?: number | null;
  phoneCode: number;
}

export const icountryKeys: (keyof ICountry)[] = [
  "iso",
  "iso_3",
  "name",
  "numCode",
  "phoneCode",
];

export const defaultCountry: ICountry = {
  iso: "",
  iso_3: null,
  name: "",
  numCode: null,
  phoneCode: 0,
};

export default ICountry;
