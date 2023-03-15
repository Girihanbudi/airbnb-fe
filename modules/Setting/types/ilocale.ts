export interface ILocale {
  code: string;
  name: string;
  local?: string;
  location?: string;
  lcid?: number;
  iso639_1?: string;
  iso639_2?: string;

  createdAt: Date | null;
  updatedAt: Date | null;
}

export const defaultLocale: ILocale = {
  code: "",
  name: "",
  local: "",
  location: "",
  lcid: 0,
  iso639_1: "",
  iso639_2: "",

  createdAt: null,
  updatedAt: null,
};

export default ILocale;
