export interface IPropertyType {
  code: string;
  localeCode: string;
  name: string;
  link: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export const ipropertyTypeKeys: (keyof IPropertyType)[] = [
  "code",
  "localeCode",
  "name",
  "link",
  "createdAt",
  "updatedAt",
];

export const defaultPropertyType: IPropertyType = {
  code: "",
  localeCode: "",
  name: "",
  link: "",
  createdAt: null,
  updatedAt: null,
};

export default IPropertyType;
